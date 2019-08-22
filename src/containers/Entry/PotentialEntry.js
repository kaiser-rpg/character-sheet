import {IEntry__secondOrder} from "../core/CoreEntry";

export class Potential extends IEntry__secondOrder {
    constructor() {
        super("potential", "manifest", "pp", "wp");
    }

    get permanentTotal() {
        return this.base + Math.max(this.charPermanentModifier - 4, 0) + this.factors.permanent;
    }

    get total() {
        return this.base + Math.max(this.charPermanentModifier - 4, 0) + this.factors.total;
    }

    get cost() {
        let sum = 0;
        for (let i = 0; i < this.base; i++) {
            sum += i;
        }
        return sum;
    }
}