import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {innateFactor, sumFactors} from "./Factor";
import {presentSheet} from "../../reducers/SheetApp";
import {DEV_COST_BASE, DEV_COST_MOD_CLASS, DEV_COST_MOD_FEATURE} from "./DevCost";

class PoolEntry {

    constructor(name, defaultChar) {
        this.name = name;
        this.char = defaultChar;
        this.devCostMod = [];
        this.baseValue = 0;
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

    get innate() {
        return sumFactors(this.factors).innate;
    }

    get natural() {
        return sumFactors(this.factors).natural;
    }

    get invested() {
        return sumFactors(this.factors).invest;
    }

    get total() {
        return sumFactors(this.factors).total;
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
        return this.baseValue * this.devCost;
    }

    updateRollingInnate(newLevel) {
        if (newLevel <= this.lastInnateLevel) return;

        for (let currLevel = this.lastInnateLevel + 1; currLevel <= newLevel; currLevel++) {
            this.rollingInnate
                .filter((innate) => (currLevel - 1) % innate.level === 0)
                .forEach((innate) => {
                    console.log("increase innate", this.name, innate.value);
                    this.factors.push(
                        new innateFactor(innate.value, innate.source + " level" + currLevel, innate.note)
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
        ß
    }

    get currentTotal() {
        return this.total - this.sacrificeDamage - this.normalDamage;
    }
}

export class LifePoints extends PoolEntry {
    constructor(startValue = 20, startMultiplier = 10) {
        super("life points", "con");
        this.freeValue = startValue;
        this.freeBase = startMultiplier;

        this.rex = 0;
    }

    get base() {
        return this.baseValue + this.freeBase;
    }

    get multiplier() {
        if (!this.char) return 0;
        let mult = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mult) ? mult.reduce((sum, curr) => sum + curr.permanentTotal, 0) : mult.permanentTotal;
    }

    get permanentTotal() {
        let lp = this.freeValue + this.base * this.multiplier + sumFactors(this.factors).permanent;
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

    get total() {
        let lp = this.freeValue + this.base * this.multiplier + sumFactors(this.factors).total;
        if (this.rex) {
            return this.rex * lp;
        }
        return Math.floor(lp);
    }
}

export class KiReserve extends PoolEntry {
    constructor(startMultiplier = 2) {
        super("ki reserve", [
            "str",
            "con",
            "dex",
            "agi",
            "foc",
            "wp"
        ]);

        this.freeBase = startMultiplier;
    }

    get base() {
        return this.baseValue;
    }

    get multiplier() {
        if (!this.char) return 0;
        let mult = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mult) ? mult.reduce((sum, curr) => sum + curr.permanentTotal, 0) : mult.permanentTotal;
    }

    get permanentTotal() {
        return this.base + 2 * this.multiplier + sumFactors(this.factors).permanent;
    }

    get temporaryBonus() {
        return sumFactors(this.factors).temporary;
    }

    get total() {
        return this.permanentTotal + this.temporaryBonus;
    }
}

export class ManaPool extends PoolEntry {
    constructor(startValue = 20, startMultiplier = 10) {
        super("mana pool", "foc");
        this.freeValue = startValue;
        this.freeBase = startMultiplier;
    }

    get base() {
        return this.baseValue + this.freeBase;
    }

    get multiplier() {
        if (!this.char) return 0;
        let mult = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mult) ? mult.reduce((sum, curr) => sum + curr.permanentTotal, 0) : mult.permanentTotal;
    }

    get permanentTotal() {
        return this.freeValue + this.base * this.multiplier + sumFactors(this.factors).permanent;
    }

    get temporaryBonus() {
        return sumFactors(this.factors).temporary;
    }

    get total() {
        return this.freeValue + this.base * this.multiplier + sumFactors(this.factors).total;
    }
}

export class PhenomStock extends PoolEntry {
    constructor() {
        super("phenom stock");
    }

    get base() {
        return this.baseValue;
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
}