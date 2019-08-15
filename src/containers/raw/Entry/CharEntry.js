import {IEntry__core} from "../core/CoreEntry";
import {setBaseValueChar} from "../../../actions/char-actions";

class CharEntry extends IEntry__core {
    constructor(name, baseValue = 5, ...altNames) {
        super(name, "general", altNames);
        this.name = name;
        this.altNames = altNames;
        this.baseValues = [setBaseValueChar(this.key, baseValue, "start")];
    }

    static lookupModifier(value) {
        if (value <= 1)
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

    get permanentModifier() {
        return CharEntry.lookupModifier(this.permanentTotal);
    }

    get modifier() {
        return CharEntry.lookupModifier(this.total);
    }

    get cost() {
        return this.base + this.permanentModifier;
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