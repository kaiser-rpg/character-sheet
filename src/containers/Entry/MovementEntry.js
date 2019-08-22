import {IEntry__secondOrder} from "../core/CoreEntry";

export class MovementEntry extends IEntry__secondOrder {
    constructor(movementType = "ground", defaultChar = "agi", altNames) {
        super(movementType, "general", "", defaultChar, altNames);
        this.multiplier = 1;
    }

    get permanentTotal() {
        return this.base + this.charPermanentTotal + this.factors.permanent;
    }

    get total() {
        return this.base + this.charTotal + this.factors.total;
    }

    get dash() {
        return 20;
    }

    get run() {
        return 50;
    }

    get sprint() {
        return 100;
    }
}