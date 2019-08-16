import {presentSheet} from "../../../reducers/SheetApp";
import {IEntry__thirdOrder} from "../core/CoreEntry";


export class ManaAccumulation extends IEntry__thirdOrder {

    constructor() {
        super("mana accumulation", "magic", "xp", "pow", "ma");
    }

    static lookupModifier(value) {
        if (value <= 4) return 0;
        if (value <= 7) return 5;
        if (value <= 11) return 10;
        if (value <= 14) return 15;
        if (value <= 18) return 20;
        if (value <= 21) return 25;
        if (value <= 24) return 30;
        if (value <= 28) return 35;
        if (value <= 29) return 40;

        return 50;
    }

    get permanentTotal() {
        let mod = ManaAccumulation.lookupModifier(this.charPermanentTotal);
        return this.base * mod + this.factors.permanent;
    }

    get total() {
        let mod = ManaAccumulation.lookupModifier(this.charPermanentTotal);
        return this.base * mod + this.factors.total;
    }

    get media() {
        return Math.ceil(Math.floor(this.permanentTotal / 3) / 5) * 5;
    }
}

export class ManaRecovery extends IEntry__thirdOrder {
    constructor() {
        super("mana recovery", "magic", "xp", "pow", "mr");
        this.multiplier = 1;
    }

    get permanentTotal() {
        let mod = ManaAccumulation.lookupModifier(this.charPermanentTotal);
        let base = presentSheet.abilities.magicAbilities.manaAccumulation.permanentTotal + this.base * mod + this.factors.permanent;
        return Math.floor(base * Math.max(this.multiplier, 0.5));
    }

    get total() {
        let mod = ManaAccumulation.lookupModifier(this.charPermanentTotal);
        let base = presentSheet.abilities.magicAbilities.manaAccumulation.total + this.base * mod + this.factors.total;
        return Math.floor(base * Math.max(this.multiplier, 0.5));
    }

}