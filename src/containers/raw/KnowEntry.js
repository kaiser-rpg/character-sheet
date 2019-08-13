import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {sumFactors} from "./Factor";
import {presentSheet} from "../../reducers/SheetApp";
import {add2Innate} from "../../actions/factor-actions";

class KnowEntry {

    constructor(name) {
        this.name = name;
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

    get base() {
        return this.baseValues.reduce((total, curr) => total + curr.value, 0);
    }

    get modifier() {
        if (!this.char) return 0;
        let arr = presentSheet.characteristics.lookupChar(this.char);
        return Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr.permanentTotal, 0) : arr.permanentTotal;
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
        return this.base + this.modifier + this.innate + this.natural;
    }

    get unused() {
        return this.total - this.invested;
    }

    get devCost() {
        return 1;
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

export class SpiritKnowledge extends KnowEntry {

    constructor() {
        super("spirit knowledge");
    }
}

export class ManaKnowledge extends KnowEntry {

    constructor() {
        super("mana knowledge");
        this.char = "apt";
    }

    get modifier() {
        let mod = super.modifier;
        console.log("MK mod", mod);
        switch (Math.min(mod, 30)) {
            case 6:
                return 10;
            case 7:
                return 20;
            case 8:
                return 30;
            case 9:
                return 40;
            case 10:
                return 50;
            case 11:
                return 75;
            case 12:
                return 100;
            case 13:
                return 150;
            case 14:
                return 200;
            case 15:
                return 300;
            case 16:
                return 400;
            case 17:
                return 600;
            case 18:
                return 800;
            case 19:
                return 1100;
            case 20:
                return 1500;
            case 21:
                return 2000;
            case 22:
                return 2600;
            case 23:
                return 3300;
            case 24:
                return 4100;
            case 25:
                return 5000;
            case 26:
                return 6000;
            case 27:
                return 7500;
            case 28:
                return 10000;
            case 29:
                return 12500;
            case 30:
                return 15000;
            default:
                return 0;

        }

    }

    get total() {
        return (this.base * 10) + this.modifier + this.innate + this.natural;
    }

}

export class PhenomKnowledge extends KnowEntry {

    constructor() {
        super("phenom knowledge");
    }

}