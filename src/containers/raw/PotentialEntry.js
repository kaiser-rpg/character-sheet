import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {presentSheet} from "../../reducers/SheetApp";
import {sumFactors} from "./Factor";

export default class PotentialEntry {
    constructor(group, defaultChar) {
        this.name = "potential";
        this.group = "manifest";
        this.char = defaultChar;
        this.devCostMod = [];
        this.baseValues = [];
        this.factors = [];
        this.rollingInnate = [];
        this.lastInnateLevel = 0;
    }

    get key() {
        return toCamelCase(this.name);
    }

    get title() {
        return toTitleCase(this.name);
    }

    get base() {
        return this.baseValues.reduce((total, curr) => total + curr.value, 0);
    }

    get modifier() {
        if (!this.char) return 0;
        let arr = presentSheet.characteristics.lookupChar(this.char);
        let sum = Array.isArray(arr) ? arr.reduce((sum, curr) => sum + curr.permanentTotal, 0) : arr.permanentTotal;

        return Math.max(sum - 4, 0);
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
        return this.base + this.modifier + sumFactors(this.factors).permanent;
    }

    get temporaryBonus() {
        return sumFactors(this.factors).temporary;
    }

    get total() {
        return this.permanentTotal + this.temporaryBonus;
    }

    get ppCost() {
        let sum = 0;
        for (let i = 0; i < this.base; i++) {
            sum += i;
        }
        return sum;
    }

    removeBySource(sourceName) {
        this.baseValues = this.baseValues.filter(item => item.source !== sourceName);
        this.rollingInnate = this.rollingInnate.filter(item => item.source !== sourceName);
        this.factors = this.factors.filter(item => item.source !== sourceName);
    }

    removeById(id) {
        this.baseValues = this.baseValues.filter(item => item._id && item._id !== id);
        this.rollingInnate = this.rollingInnate.filter(item => item._id && item._id !== id);
        this.factors = this.factors.filter(item => item._id && item._id !== id);
    }
}