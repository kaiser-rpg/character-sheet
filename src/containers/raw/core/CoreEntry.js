import {toCamelCase, toTitleCase} from "../../../util/StringHelper";
import {presentSheet} from "../../../reducers/SheetApp";
import {sumFactors} from "../../../util/Factor";
import {REDUCE_DEV_COST, SET_DEV_COST} from "../../../actions/dev-cost-actions";
import {add2Innate} from "../../../actions/factor-actions";

export class IEntry__core {
    constructor(name = "", group = "", altNames = []) {
        this.name = name;
        this.group = "";
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

    get investBase() {
        return this.base;
    }

    get cost() {
        return this.investBase;
    }

    isName(check) {
        return check === this.name
            || check === this.key
            || check === this.title
            || this.altNames.includes(check);
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
    constructor(name, group, defaultChar, ...altNames) {
        super(name, group, altNames);
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
                    this.factors.push(
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
    constructor(name, group, defaultChar, ...altNames) {
        super(name, group, altNames);
        this.char = defaultChar;
    }

    get charPermanentModifier() {
        return presentSheet.characteristics.lookupCharValue(this.char, "permanentModifier");
    }

    get charModifier() {
        return presentSheet.characteristics.lookupCharValue(this.char, "modifier");
    }

    get charPermanentTotal() {
        return presentSheet.characteristics.lookupCharValue(this.char, "permanentTotal");
    }

    get charTotal() {
        return presentSheet.characteristics.lookupCharValue(this.char, "total");
    }

    get permanentTotal() {
        return this.base + this.charPermanentModifier + this.factors.permanent;
    }

    get total() {
        return this.base + this.charModifier + this.factors.total;
    }
}

export class IEntry__thirdOrder extends IEntry__secondOrder {

    constructor(name, group, defaultChar, ...altNames) {
        super(name, group, altNames);
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

    get investBase() {
        return this.base;
    }

    get cost() {
        return this.investBase * this.devCost;
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
    constructor(name, group, defaultChar, ...altNames) {
        super(name, group, defaultChar, altNames);
        this.tiedSkillKey = "";
        this.tiedSkillLag = 0;
    }

    get isUntrained() {
        let f = this.factors;
        return this.base === 0 && f.innate === 0 && f.natural === 0;
    }

    get tiedBase() {
        if (!presentSheet.skills.hasOwnProperty(this.tiedSkillKey)) return 0;
        return Math.max(presentSheet.skills[this.tiedSkillKey].base - this.tiedSkillLag, 0);
    }

    get isLowerTied() {
        if (!this.tiedSkillKey) return false;
        return this.base === 0 && this.tiedBase > 0;
    }

    get permanentTotal() {
        return this.isLowerTied ? this.tiedBase : this.base + this.isUntrained ? -3 : 0 + this.charPermanentModifier + this.factors.permanent;
    }

    get total() {
        return this.isLowerTied ? this.tiedBase : this.base + this.isUntrained ? -3 : 0 + this.charModifier + this.factors.total;
    }

    setTiedSkill(skillKey, lag) {
        this.tiedSkillKey = skillKey;
        this.tiedSkillLag = lag;
    }
}