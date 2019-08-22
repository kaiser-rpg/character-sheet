import {innateBonusClass} from "../../actions/innate-bonus-actions";
import {IEntry__firstOrder, IEntry__secondOrder} from "../core/CoreEntry";
import {setBaseValueChar} from "../../actions/char-actions";
import {present} from "../../reducers";

export class Presence extends IEntry__firstOrder {

    constructor() {
        super("presence", "general", null, "PrR");
        this.baseValues = [setBaseValueChar(this.key, 2, "start")];
        this.rollingInnate = [new innateBonusClass("ability.general", "presence", 1, 2, "start")];
    }
}

export class ResistanceEntry extends IEntry__secondOrder {

    constructor(name, defaultChar, shortName) {
        super(name, "general", null, defaultChar, shortName);
        this.multiplier = 1;
    }

    get base() {
        return Math.floor(present().abilities.generalAbilities.presence.total / Math.max(this.multiplier, 0.5));
    }

}