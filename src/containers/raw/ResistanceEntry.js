import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {presentSheet} from "../../reducers/SheetApp";
import {sumFactors} from "./Factor";
import {add2Innate} from "../../actions/factor-actions";
import {innateBonusClass} from "../../actions/innate-bonus-actions";

export class Presence {

    constructor() {
        this.name = "presence";
        this.shortName = "PrR";
        this.group = "general";
        this.factors = [];
        this.rollingInnate = [new innateBonusClass("ability.general", "presence", 1, 2, "core")];
        this.lastInnateLevel = 0;
    }

    get key() {
        return toCamelCase(this.name);
    }

    get title() {
        return toTitleCase(this.name);
    }

    get base() {
        return 2;
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

    removeBySource(sourceName) {
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
        this.factors = this.factors.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
        this.factors = this.factors.filter(item => item._id && item._id !== id);
    }

}

export class ResistanceEntry {

    constructor(name, defaultChar, shortName) {
        this.name = name;
        this.shortName = shortName;
        this.group = "general";
        this.char = defaultChar;
        this.devCostMod = [];
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
        return presentSheet.abilities.generalAbilities.presence.total;
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

    removeBySource(sourceName) {
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
        this.factors = this.factors.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
        this.factors = this.factors.filter(item => item._id && item._id !== id);
    }

}