import {IEntry__thirdOrder} from "../core/CoreEntry";

class KnowEntry extends IEntry__thirdOrder {

    constructor(name, group, defaultChar, ...altNames) {
        super(name, group, defaultChar, ...altNames);
        this.devCostMin = 1;
        this.devCostMax = 1;
    }

    get unused() {
        return this.total - this.factors.invest;
    }
}

export class SpiritKnowledge extends KnowEntry {
    constructor() {
        super("spirit knowledge", "martial", null, "sk");
    }
}

export class ManaKnowledge extends KnowEntry {
    constructor() {
        super("mana knowledge", "magic", "apt", "mk");
    }

    static getModifier(value) {
        switch (Math.min(value, 30)) {
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

    get permanentTotal() {
        return (this.base * 10) + ManaKnowledge.getModifier(this.charPermanentModifier) + this.factors.permanent;
    }

    get total() {
        return (this.base * 10) + ManaKnowledge.getModifier(this.charPermanentModifier) + this.factors.total;
    }

    get unused() {
        return this.total - this.factors.invest;
    }
}

export class PhenomKnowledge extends KnowEntry {
    constructor() {
        super("phenom knowledge", "manifest", null, "pk");
    }
}