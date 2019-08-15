import {IEntry__thirdOrder} from "../core/CoreEntry";


export default class ChakraEntry extends IEntry__thirdOrder {

    constructor(color, defaultChar) {
        super(color + " chakra", "martial", defaultChar, color);
    }

    get permanentTotal() {
        return this.base + Math.floor(this.charPermanentModifier / 3) + this.factors.permanent;
    }

    get total() {
        return this.base + Math.floor(this.charPermanentModifier / 3) + this.factors.total;
    }
}