import {IEntry__thirdOrder} from "../core/CoreEntry";

class PoolEntry extends IEntry__thirdOrder {

    constructor(name, group, defaultChar, ...altNames) {
        super(name, group, defaultChar, ...altNames);

        this.normalDamage = 0;
        this.sacrificeDamage = 0;
    }

    get currentTotal() {
        return this.total - this.sacrificeDamage - this.normalDamage;
    }

    heal(value) {
        this.normalDamage = Math.max(0, this.normalDamage - value);
    }

    healSacrifice(value) {
        this.sacrificeDamage = Math.max(0, this.sacrificeDamage - value);
    }
}

export class LifePoints extends PoolEntry {
    constructor() {
        super("life points", "general", "con", "lp");
        this.freeValue = 20;
        this.freeBase = 10;
        this.rex = 1;

        this.devCostMin = 2;
        this.devCostMax = 4;
    }

    get permanentTotal() {
        let baseLP = (this.base + this.freeBase) * this.charPermanentTotal;

        return Math.floor(this.rex === 0 ? 1 : this.rex * (
            this.freeBase
            + baseLP
            + this.factors.permanent
        ));
    }

    get total() {
        let baseLP = (this.base + this.freeBase) * this.charPermanentTotal;

        return Math.floor(this.rex === 0 ? 1 : this.rex * (
            this.freeBase
            + baseLP
            + this.factors.total
        ));
    }
}

export class KiReserve extends PoolEntry {
    constructor() {
        super("ki reserve", "martial", [
            "str",
            "con",
            "dex",
            "agi",
            "foc",
            "wp"
        ], "ki");
        this.multiplier = 2;

        this.devCostMin = 1;
        this.devCostMax = 3;
    }

    get permanentTotal() {
        let baseKi = this.base * 10;
        let modKi = this.multiplier * this.charPermanentTotal;
        return baseKi + modKi + this.factors.permanent;
    }

    get total() {
        let baseKi = this.base * 10;
        let modKi = this.multiplier * this.charTotal;
        return baseKi + modKi + this.factors.total;
    }
}

export class ManaPool extends PoolEntry {
    constructor() {
        super("mana pool", "magic", "foc", "mana");
        this.freeValue = 20;
        this.freeBase = 10;

        this.devCostMin = 1;
        this.devCostMax = 3;
    }

    get permanentTotal() {
        let baseMana = this.freeBase + this.base * 50;
        let modMana = this.freeBase * this.charPermanentTotal;

        return baseMana + modMana + this.factors.permanent;
    }

    get permanentTotal() {
        let baseMana = this.freeBase + this.base * 50;
        let modMana = this.freeBase * this.charTotal;

        return baseMana + modMana + this.factors.total;
    }
}

export class PhenomStock extends PoolEntry {
    constructor() {
        super("phenom stock", "manifest", "wp", "pp", "ps");

        this.devCostMin = 1;
        this.devCostMax = 2;
    }

    get permanentTotal() {
        return this.base + this.charPermanentTotal + this.factors.permanent;
    }

    get permanentTotal() {
        return this.base + this.charPermanentTotal + this.factors.total;
    }
}