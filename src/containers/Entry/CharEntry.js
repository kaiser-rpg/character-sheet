import {IEntry__core} from "../core/CoreEntry";
import {setBaseValueChar} from "../../actions/char-actions";

class CharEntry extends IEntry__core {
    constructor(name, baseValue = 5, ...altNames) {
        super(name, "general", "cp", altNames);
        this.name = name;
        this.altNames = altNames;
        this.baseValues = [setBaseValueChar(this.key, baseValue, "start")];
    }

    static lookupModifier(value) {
        if (value <= 1)
            return -3;

        if (value <= 3)
            return -2;

        if (value <= 4)
            return -1;

        if (value <= 5)
            return 0;

        if (value <= 7)
            return 1;

        if (value <= 9)
            return 2;

        if (value <= 12)
            return 3;

        if (value <= 15)
            return 4;

        if (value <= 19)
            return 5;

        if (value <= 20)
            return 6;

        if (value <= 22)
            return 7;

        if (value <= 25)
            return 8;

        if (value <= 29)
            return 9;

        if (value <= 30)
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