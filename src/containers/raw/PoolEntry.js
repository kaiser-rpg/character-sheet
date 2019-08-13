import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {sumFactors} from "./Factor";
import {presentSheet} from "../../reducers/SheetApp";
import {DEV_COST_BASE, DEV_COST_MOD_CLASS, DEV_COST_MOD_FEATURE} from "./DevCost";
import {add2Innate} from "../../actions/factor-actions";

class PoolEntry {

    constructor(name, defaultChar) {
        this.name = name;
        this.char = defaultChar;
        this.devCostMod = [];
        this.baseValues = [];
        this.factors = [];
        this.rollingInnate = [];
        this.lastInnateLevel = 0;

        this.normalDamage = 0;
        this.sacrificeDamage = 0;
    }

    get key() {
        return toCamelCase(this.name);
    }

    get title() {
        return toTitleCase(this.name);
    }

    get base() {
        return this.baseValues.reduce((total, curr) => total + curr.value, 0);
    }

    get innate() {
        return sumFactors(this.factors).innate;
    }

    get natural() {
        return sumFactors(this.factors).natural;
    }

    get invested() {
        return sumFactors(this.factors).invest;
    }

    get permanentTotal() {
        return this.base + sumFactors(this.factors).permanent;
    }

    get temporaryBonus() {
        return sumFactors(this.factors).temporary;
    }

    get total() {
        return this.permanentTotal + this.temporaryBonus;
    }

    get devCost() {
        let baseCost = this.devCostMod
            .filter((d) => d.type === DEV_COST_BASE)
            .reduce((min, curr) => Math.min(min, curr.value), 5);
        let reduction = this.devCostMod
            .filter((d) => d.type === DEV_COST_MOD_CLASS || d.type === DEV_COST_MOD_FEATURE)
            .reduce((sum, curr) => sum + curr, 0);
        return Math.max(3, baseCost - reduction);
    }

    get xpCost() {
        return this.base * this.devCost;
    }

    updateRollingInnate(newLevel) {
        if (newLevel <= this.lastInnateLevel) return;

        for (let currLevel = this.lastInnateLevel + 1; currLevel <= newLevel; currLevel++) {
            this.rollingInnate
                .filter((innate) => (currLevel - 1) % innate.level === 0)
                .forEach((innate) => {
                    console.log("increase innate", this.name, innate.value);
                    this.factors.push(
                        new add2Innate(innate.superType, innate.key, innate.value, innate.source, ["level " + currLevel, innate.note])
                    );
                });
        }

        this.lastInnateLevel = newLevel;
    }

    heal(value) {
        this.normalDamage = Math.max(0, this.normalDamage - value);
    }

    healSacrifice(value) {
        this.sacrificeDamage = Math.max(0, this.sacrificeDamage - value);
    }

    get currentTotal() {
        return this.total - this.sacrificeDamage - this.normalDamage;
    }

    removeBySource(sourceName) {
        this.baseValues = this.baseValues.filter(item => item.source !== sourceName);
        this.factors = this.factors.filter(item => item.source !== sourceName);
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.baseValues = this.baseValues.filter(item => item._id && item._id !== id);
        this.factors = this.factors.filter(item => item._id && item._id !== id);
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
    }
}

export class LifePoints extends PoolEntry {
    constructor(startValue = 20, startBase = 10) {
        super("life points", "con");
        this.freeValue = startValue;
        this.freeBase = startBase;

        this.rex = 0;
    }

    get multiplier() {
        if (!this.char) return 0;
        let mult = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mult) ? mult.reduce((sum, curr) => sum + curr.permanentTotal, 0) : mult.permanentTotal;
    }

    get permanentTotal() {
        let lp = this.freeValue + (this.base + this.freeBase) * this.multiplier + sumFactors(this.factors).permanent;
        if (this.rex) {
            return this.rex * lp;
        }
        return Math.floor(lp);
    }

    get temporaryBonus() {
        let lp = sumFactors(this.factors).temporary;
        if (this.rex) {
            return this.rex * lp;
        }
        return Math.floor(lp);
    }
}

export class KiReserve extends PoolEntry {
    constructor(startCharMult = 2) {
        super("ki reserve", [
            "str",
            "con",
            "dex",
            "agi",
            "foc",
            "wp"
        ]);

        this.charMult = startCharMult;
    }

    get multiplier() {
        if (!this.char) return 0;
        let mult = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mult) ? mult.reduce((sum, curr) => sum + curr.permanentTotal, 0) : mult.permanentTotal;
    }

    get permanentTotal() {
        return this.base + this.charMult * this.multiplier + sumFactors(this.factors).permanent;
    }
}

export class ManaPool extends PoolEntry {
    constructor(startValue = 20, startBase = 10) {
        super("mana pool", "foc");
        this.freeValue = startValue;
        this.freeBase = startBase;
    }

    get multiplier() {
        if (!this.char) return 0;
        let mult = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mult) ? mult.reduce((sum, curr) => sum + curr.permanentTotal, 0) : mult.permanentTotal;
    }

    get permanentTotal() {
        return this.freeValue + this.base * 50 + this.freeBase * this.multiplier + sumFactors(this.factors).permanent;
    }
}

export class PhenomStock extends PoolEntry {
    constructor() {
        super("phenom stock");
    }
}