import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {sumFactors} from "../../util/Factor";
import {REDUCE_DEV_COST, SET_DEV_COST} from "../../actions/dev-cost-actions";
import {add2Innate} from "../../actions/factor-actions";
import {present} from "../../reducers";

export class IEntry__core {
    constructor(name = "", group = "", expenseKey = "xp", ...altNames) {
        this.name = name;
        this.group = group;
        this.expenseKey = expenseKey;
        this.altNames = altNames;
        this.baseValues = [];
        this.factorValues = [];
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

    get factors() {
        return sumFactors(this.factorValues);
    }

    get permanentTotal() {
        return this.base + this.factors.permanent;
    }

    get total() {
        return this.base + this.factors.total;
    }

    get maximum() {
        return this.permanentTotal + this.factors.invest;
    }

    get cost() {
        return this.base;
    }

    isName(check) {
        let check2 = check.toLowerCase();
        return check === this.name || check2 === this.name
            || check === this.key || check2 === this.key
            || check === this.title || check2 === this.title
            || this.altNames.includes(check) || this.altNames.includes(check2);
    }

    removeBySource(sourceName) {
        this.baseValues = this.baseValues.filter(item => item.source !== sourceName);
        this.factorValues = this.factorValues.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.baseValues = this.baseValues.filter(item => item._id && item._id !== id);
        this.factorValues = this.factorValues.filter(item => item._id && item._id !== id);
    }
}

export class IEntry__firstOrder extends IEntry__core {
    constructor(name, group, expenseKey, ...altNames) {
        super(name, group, expenseKey, altNames);
        this.rollingInnate = [];
        this.lastInnateLevel = 0;
    }

    updateRollingInnate(newLevel) {
        if (newLevel <= this.lastInnateLevel) return;

        for (let currLevel = this.lastInnateLevel + 1; currLevel <= newLevel; currLevel++) {
            this.rollingInnate
                .filter((innate) => (currLevel - 1) % innate.level === 0)
                .forEach((innate) => {
                    console.log("increase innate", this.name, innate.value);
                    this.factorValues.push(
                        new add2Innate("skill", innate.key, innate.value, innate.source, ["level " + currLevel, innate.note])
                    );
                });
        }

        this.lastInnateLevel = newLevel;
    }

    removeBySource(sourceName) {
        super.removeBySource(sourceName);
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        super.removeById(id);
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
    }
}

export class IEntry__secondOrder extends IEntry__firstOrder {
    constructor(name, group, expenseKey, defaultChar, ...altNames) {
        super(name, group, expenseKey, altNames);
        this.char = defaultChar;
    }

    get charPermanentModifier() {
        return present().characteristics.lookupCharValue(this.char, "permanentModifier");
    }

    get charModifier() {
        return present().characteristics.lookupCharValue(this.char, "modifier");
    }

    get charPermanentTotal() {
        return present().characteristics.lookupCharValue(this.char, "permanentTotal");
    }

    get charTotal() {
        return present().characteristics.lookupCharValue(this.char, "total");
    }

    get permanentTotal() {
        return this.base + this.charPermanentModifier + this.factors.permanent;
    }

    get total() {
        return this.base + this.charModifier + this.factors.total;
    }
}

export class IEntry__thirdOrder extends IEntry__secondOrder {
    constructor(name, group, expenseKey, defaultChar, ...altNames) {
        super(name, group, expenseKey, defaultChar, altNames);
        this.devCostMod = [];

        this.devCostMin = 3;
        this.devCostMax = 5;
    }

    get devCost() {
        let baseCost = this.devCostMod
            .filter((d) => d.type === SET_DEV_COST)
            .reduce((min, curr) => Math.min(min, curr.value), this.devCostMax);
        let reduction = this.devCostMod
            .filter((d) => d.type === REDUCE_DEV_COST)
            .reduce((sum, curr) => sum + curr, 0);
        return Math.max(this.devCostMin, baseCost - reduction);
    }

    get cost() {
        return this.base * this.devCost;
    }

    removeBySource(sourceName) {
        super.removeBySource(sourceName);
        this.devCostMod = this.devCostMod.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        super.removeById(id);
        this.devCostMod = this.devCostMod.filter(item => item._id && item._id !== id);
    }

}

export class IEntry_fourthOrder extends IEntry__thirdOrder {
    constructor(name, group, expenseKey, defaultChar, ...altNames) {
        super(name, group, expenseKey, defaultChar, altNames);
        this.tieValues = [];
    }

    get isUntrained() {
        let f = this.factors;
        return this.base === 0 && f.innate === 0 && f.natural === 0;
    }

    get tieSkill() {
        if (this.tieValues.length === 0) return null;
        return this.tieValues.reduce((best, curr) => {
            //Make sure tie key exists
            if (!present().skills.hasOwnProperty(curr.tieKey)) return best;
            // Get tie skill
            let currSkill = present().skills[curr.tieKey];
            // Return curr if better than best or if no best exists
            if (!best || best.b < (currSkill.base - curr.value)) return {
                name: curr.tieKey,
                title: currSkill.title,
                b: currSkill.base - curr.value,
                lag: curr.value
            };
            //otherwise return the best
            return best;
        }, null);
    }

    get tieBase() {
        return Math.max(this.tieSkill.b, 0);
    }

    get isLowerTie() {
        return this.tieValues.length > 0 && this.base === 0;
    }

    get permanentTotal() {
        return (this.isLowerTie ? this.tieBase : this.base) + (this.isUntrained ? -3 : 0) + this.charPermanentModifier + this.factors.permanent;
    }

    get total() {
        return (this.isLowerTie ? this.tieBase : this.base) + (this.isUntrained ? -3 : 0) + this.charModifier + this.factors.total;
    }

    removeBySource(sourceName) {
        super.removeBySource(sourceName);
        this.tieValues = this.tieValues.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        super.removeById(id);
        this.tieValues = this.tieValues.filter(item => item._id && item._id !== id);
    }
}