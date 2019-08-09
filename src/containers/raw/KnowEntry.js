import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {sumFactors} from "./Factor";
import {presentSheet} from "../../reducers/SheetApp";

class KnowEntry {

    constructor(name) {
        this.name = name;
        this.devCostMod = [];
        this.baseValue = 0;
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
        return 0;
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
        return this.baseValue * this.devCost;
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

    get base() {
        return this.baseValue * 10;
    }

    get modifier() {
        if (!this.char) return 0;
        let mod = presentSheet.characteristics.lookupChar(this.char);
        let sum = Array.isArray(mod) ? mod.reduce((sum, curr) => sum + curr.permanentTotal, 0) : mod.permanentTotal;
        switch (Math.min(sum, 30)) {
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

}

export class PhenomKnowledge extends KnowEntry {

    constructor() {
        super("phenom knowledge");
    }

}