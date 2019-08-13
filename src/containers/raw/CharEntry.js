import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {sumFactors} from "./Factor";

class CharEntry {
    constructor(name, baseValue = 5, ...altNames) {
        this.name = name;
        this.altNames = altNames;
        this.baseValue = 5;
        this.factors = [];
    }

    get title() {
        toTitleCase(this.name);
    }

    get key() {
        toCamelCase(this.name);
    }

    isName(check) {
        return check === name || this.altNames.includes(check);
    }

    get modifier() {
        let total = this.total;
        if (total <= 1)
            return -3;

        if (total <= 3)
            return -2;

        if (total <= 4)
            return -1;

        if (total <= 5)
            return 0;

        if (total <= 7)
            return 1;

        if (total <= 9)
            return 2;

        if (total <= 12)
            return 3;

        if (total <= 15)
            return 4;

        if (total <= 19)
            return 5;

        if (total <= 20)
            return 6;

        if (total <= 22)
            return 7;

        if (total <= 25)
            return 8;

        if (total <= 29)
            return 9;

        if (total <= 30)
            return 10;

        return -5;
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
        return this.baseValue + sumFactors(this.factors).permanent;
    }

    get temporaryBonus() {
        return sumFactors(this.factors).temporary;
    }

    get total() {
        return this.baseValue + sumFactors(this.factors).total;
    }

    removeBySource(sourceName) {
        this.factors = this.factors.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.factors = this.factors.filter(item => item._id && item._id !== id);
    }

    get cost() {
        return this.baseValue + this.modifier;
    }
}

export class Strength extends CharEntry {
    constructor(baseValue = 5) {
        super("strength", baseValue, "str");
    }
}

export class Constitution extends CharEntry {
    constructor(baseValue = 5) {
        super("constitution", baseValue, "con");
    }
}

export class Dexterity extends CharEntry {
    constructor(baseValue = 5) {
        super("dexterity", baseValue, "dex");
    }
}

export class Agility extends CharEntry {
    constructor(baseValue = 5) {
        super("agility", baseValue, "agi");
    }
}

export class Perception extends CharEntry {
    constructor(baseValue = 5) {
        super("perception", baseValue, "per");
    }
}

export class Aptitude extends CharEntry {
    constructor(baseValue = 5) {
        super("aptitude", baseValue, "apt");
    }
}

export class Focus extends CharEntry {
    constructor(baseValue = 5) {
        super("focus", baseValue, "foc");
    }
}

export class Willpower extends CharEntry {
    constructor(baseValue = 5) {
        super("willpower", baseValue, "wp");
    }
}