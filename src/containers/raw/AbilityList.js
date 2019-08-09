import {KiReserve, LifePoints, ManaPool, PhenomStock} from "./PoolEntry";
import {ManaKnowledge, PhenomKnowledge, SpiritKnowledge} from "./KnowEntry";

export default class AbilityList {

    constructor() {
        this.generalAbilities = new GeneralAbilities();
        this.martialAbilities = new MartialAbilities();
        this.magicAbilities = new MagicAbilities();
        this.manifestAbilities = new ManifestAbilities();
    }

}

export class GeneralAbilities {

    constructor() {
        this.lifePoints = new LifePoints();
    }
}


export class MartialAbilities {

    constructor() {
        this.kiReserve = new KiReserve();
        this.spiritKnowledge = new SpiritKnowledge();
    }

}

export class MagicAbilities {

    constructor() {
        this.manaPool = new ManaPool();
        this.manaKnowledge = new ManaKnowledge();

    }

}

export class ManifestAbilities {

    constructor() {
        this.phenomStock = new PhenomStock();
        this.phenomKnowledge = new PhenomKnowledge();
    }
}