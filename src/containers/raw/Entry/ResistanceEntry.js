import {presentSheet} from "../../../reducers/SheetApp";
import {innateBonusClass} from "../../../actions/innate-bonus-actions";
import {IEntry__firstOrder, IEntry__secondOrder} from "../core/CoreEntry";
import {setBaseValueChar} from "../../../actions/char-actions";

export class Presence extends IEntry__firstOrder {

    constructor() {
        super("presence", "general", "PrR");
        this.baseValues = [setBaseValueChar(this.key, 2, "start")];
        this.rollingInnate = [new innateBonusClass("ability.general", "presence", 1, 2, "start")];
    }
}

export class ResistanceEntry extends IEntry__secondOrder {

    constructor(name, defaultChar, shortName) {
        super(name, "general", defaultChar, shortName);
        this.multiplier = 1;
    }

    get base() {
        return Math.floor(presentSheet.abilities.generalAbilities.presence.total / Math.max(this.multiplier, 0.5));
    }

}