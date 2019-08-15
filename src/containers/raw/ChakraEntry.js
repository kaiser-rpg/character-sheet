import {toCamelCase, toTitleCase} from "../../util/StringHelper";
import {sumFactors} from "./Factor";
import {DEV_COST_BASE, DEV_COST_MOD_CLASS, DEV_COST_MOD_FEATURE} from "./DevCost";
import {add2Innate} from "../../actions/factor-actions";
import {presentSheet} from "../../reducers/SheetApp";


export default class ChakraEntry {

    constructor(name, defaultChar) {
        this.name = name;
        this.group = "martial";
        this.char = defaultChar;
        this.devCostMod = [];
        this.baseValues = [];
        this.factors = [];
        this.rollingInnate = [];
        this.lastInnateLevel = [];
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

        return Math.max(Math.floor(sum / 3), 1);
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

    get devCost() {
        let baseCost = this.devCostMod
            .filter((d) => d.type === DEV_COST_BASE)
            .reduce((min, curr) => Math.min(min, curr.value), 5);
        let reduction = this.devCostMod
            .filter((d) => d.type === DEV_COST_MOD_CLASS || d.type === DEV_COST_MOD_FEATURE)
            .reduce((sum, curr) => sum + curr, 0);
        return Math.max(1, baseCost - reduction);
    }

    get xpCost() {
        return this.base * this.devCost;
    }

    updateRollingInnate(newLevel) {
        if (newLevel <= this.lastInnateLevel) return;

        for (let currLevel = this.lastInnateLevel + 1; currLevel <= newLevel; currLevel++) {
            this.rollingInnate
                .filter((innate) => (currLevel - 1) % innate.level === 0)
                .forEach((innate) => {
                    console.log("increase innate", this.name, innate.value);
                    this.factors.push(
                        new add2Innate(innate.superType, innate.key, innate.value, innate.source, ["level " + currLevel, innate.note])
                    );
                });
        }

        this.lastInnateLevel = newLevel;
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