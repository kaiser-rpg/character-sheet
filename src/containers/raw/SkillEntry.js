import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {innateFactor, sumFactors} from "./Factor";
import {presentSheet} from "../../reducers/SheetApp";
import {DEV_COST_BASE, DEV_COST_MOD_CLASS, DEV_COST_MOD_FEATURE} from "./DevCost";

export default class SkillEntry {

    constructor(name, group, defaultChar, baseValue = 0) {
        this.name = name;
        this.group = group;
        this.char = defaultChar;
        this.devCostMod = [];
        this.baseValue = baseValue;
        this.factors = [];
        this.rollingInnate = [];
        this.lastInnateLevel = 0;
    }

    get key() {
        return toCamelCase(this.name);
    }

    get title() {
        return toTitleCase(this.name);
    }

    get base() {
        if (this.tiedTo) {
            return Math.max(this.baseValue, this.tiedTo.skill.baseValue - this.tiedTo.behind);
        }

        return this.baseValue;
    }

    get modifier() {
        if (!this.char) return 0;
        let mod = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mod) ? mod.reduce((sum, curr) => sum + curr.modifier, 0) : mod.modifier;
    }

    get innate() {
        return sumFactors(this.factors).innate;
    }

    get natural() {
        let f = sumFactors(this.factors);
        if (this.base === 0 && f.innate === 0 && f.natural === 0) {
            return -3;
        }
        return f.natural;
    }

    get invested() {
        return sumFactors(this.factors).invest;
    }

    get permanentTotal() {
        return this.base + this.modifier + this.innate + this.natural - this.invested;
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

}

export class Initiative {
    constructor(defaultChar) {
        this.name = "initiative";
        this.group = "general";
        this.char = defaultChar;
        this.baseValue = 20;
        this.factors = [];
        this.rollingInnate = [];
        this.lastInnateLevel = 0;
    }

    get key() {
        return toCamelCase(this.name);
    }

    get title() {
        return toTitleCase(this.name);
    }

    get base() {
        return this.baseValue;
    }

    get modifier() {
        if (!this.char) return 0;
        let mod = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(mod) ? mod.reduce((sum, curr) => sum + curr.modifier, 0) : mod.modifier;
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
        return this.base + this.modifier + this.innate + this.natural - this.invested;
    }

    get temporaryBonus() {
        return sumFactors(this.factors).temporary;
    }

    get total() {
        return this.permanentTotal + this.temporaryBonus;
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

}

export class SpiritSkillEntry {

    constructor(name, defaultSkill) {
        this.name = name;
        this.group = "spirit";
        this.skill = defaultSkill;
        this.factors = [];
        this.rollingInnate = [];
        this.lastInnateLevel = 0;
    }


    get key() {
        return toCamelCase(this.name);
    }

    get title() {
        return toTitleCase(this.name);
    }

    get base() {
        let sk = presentSheet.abilities.martialAbilities.spiritKnowledge.total;
        if (presentSheet.skills.hasOwnProperty(this.skill)) {
            let si = presentSheet.skills[this.skill].permanentTotal();
            return Math.floor((sk + si) / 2);
        }
        return Math.floor(sk / 2);
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
        return this.base + this.innate + this.natural - this.invested;
    }

    get temporaryBonus() {
        return sumFactors(this.factors).temporary;
    }

    get total() {
        return this.permanentTotal + this.temporaryBonus;
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
}