import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {sumFactors} from "./Factor";
import {presentSheet} from "../../reducers/SheetApp";
import {REDUCE_DEV_COST, SET_DEV_COST} from "../../actions/dev-cost-actions";
import {add2Innate} from "../../actions/factor-actions";

export default class SkillEntry {

    constructor(name, group, defaultChar) {
        this.name = name;
        this.group = group;
        this.char = defaultChar;
        this.devCostMod = [];
        this.baseValues = [];
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

    get isUntrained() {
        let f = sumFactors(this.factors);
        return this.base === 0 && f.innate === 0 && f.natural === 0;
    }

    get isLowerTie() {
        if (!this.tiedTo) return false;
        return this.baseValues.length === 0 && (this.tiedTo.skill.baseValues.reduce((total, curr) => total + curr.value, 0) - this.tiedTo.behind) > 0;
    }

    get base() {
        let b = this.baseValues.reduce((total, curr) => total + curr.value, 0);

        if (this.tiedTo) {
            return Math.max(b, this.tiedTo.skill.baseValues.reduce((total, curr) => total + curr.value, 0) - this.tiedTo.behind);
        }
        return b;
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
        if (this.isUntrained) {
            return -3;
        }
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

    get devCost() {
        let baseCost = this.devCostMod
            .filter((d) => d.type === SET_DEV_COST)
            .reduce((min, curr) => Math.min(min, curr.value), 5);
        let reduction = this.devCostMod
            .filter((d) => d.type === REDUCE_DEV_COST)
            .reduce((sum, curr) => sum + curr, 0);
        return Math.max(3, baseCost - reduction);
    }

    get xpCost() {
        return this.baseValues.reduce((total, curr) => total + curr.value, 0) * this.devCost;
    }

    updateRollingInnate(newLevel) {
        if (newLevel <= this.lastInnateLevel) return;

        for (let currLevel = this.lastInnateLevel + 1; currLevel <= newLevel; currLevel++) {
            this.rollingInnate
                .filter((innate) => (currLevel - 1) % innate.level === 0)
                .forEach((innate) => {
                    console.log("increase innate", this.name, innate.value);
                    this.factors.push(
                        new add2Innate("skill", innate.key, innate.value, innate.source, ["level " + currLevel, innate.note])
                    );
                });
        }

        this.lastInnateLevel = newLevel;
    }

    removeBySource(sourceName) {
        this.baseValues = this.baseValues.filter(item => item.source !== sourceName);
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
        this.factors = this.factors.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.baseValues = this.baseValues.filter(item => item._id && item._id !== id);
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
        this.factors = this.factors.filter(item => item._id && item._id !== id);
    }

}

export class Initiative {
    constructor(defaultChar, startBase = 10) {
        this.name = "initiative";
        this.group = "general";
        this.char = defaultChar;
        this.baseValue = startBase;
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
                        new add2Innate("skill", innate.key, innate.value, innate.source, ["level " + currLevel, innate.note])
                    );
                });
        }

        this.lastInnateLevel = newLevel;
    }

    removeBySource(sourceName) {
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
        this.factors = this.factors.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
        this.factors = this.factors.filter(item => item._id && item._id !== id);
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
                        new add2Innate("skill", innate.key, innate.value, innate.source, ["level " + currLevel, innate.note])
                    );
                });
        }

        this.lastInnateLevel = newLevel;
    }

    removeBySource(sourceName) {
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
        this.factors = this.factors.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
        this.factors = this.factors.filter(item => item._id && item._id !== id);
    }
}