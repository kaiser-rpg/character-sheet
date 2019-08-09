import {KiReserve, LifePoints, ManaPool, PhenomStock} from "./PoolEntry";
import {ManaKnowledge, PhenomKnowledge, SpiritKnowledge} from "./KnowEntry";
import {Presence, ResistanceEntry} from "./ResistanceEntry";

export default class AbilityList {

    constructor() {
        this.generalAbilities = new GeneralAbilities();
        this.martialAbilities = new MartialAbilities();
        this.magicAbilities = new MagicAbilities();
        this.manifestAbilities = new ManifestAbilities();
    }

    updateRollingInnate(newLevel) {
        this.generalAbilities.updateRollingInnate(newLevel);
        this.martialAbilities.updateRollingInnate(newLevel);
        this.magicAbilities.updateRollingInnate(newLevel);
        this.manifestAbilities.updateRollingInnate(newLevel);
    }

}

export class GeneralAbilities {

    constructor() {
        this.lifePoints = new LifePoints();
        this.presence = new Presence();
        this.physicalResistance = new ResistanceEntry("physical resistance", "con", "PhR");
        this.spiritResistance = new ResistanceEntry("spirit resistance", "wp", "SR");
        this.mentalResistance = new ResistanceEntry("mental resistance", "foc", "MR");
    }

    updateRollingInnate(newLevel) {
        this.lifePoints.updateRollingInnate(newLevel);
        this.presence.updateRollingInnate(newLevel);
    }
}


export class MartialAbilities {

    constructor() {
        this.kiReserve = new KiReserve();
        this.spiritKnowledge = new SpiritKnowledge();
    }

    updateRollingInnate(newLevel) {
        this.kiReserve.updateRollingInnate(newLevel);
        this.spiritKnowledge.updateRollingInnate(newLevel);
    }

}

export class MagicAbilities {

    constructor() {
        this.manaPool = new ManaPool();
        this.manaKnowledge = new ManaKnowledge();
    }

    updateRollingInnate(newLevel) {
        this.manaPool.updateRollingInnate(newLevel);
        this.manaKnowledge.updateRollingInnate(newLevel);
    }

}

export class ManifestAbilities {

    constructor() {
        this.phenomStock = new PhenomStock();
        this.phenomKnowledge = new PhenomKnowledge();
    }

    updateRollingInnate(newLevel) {
        this.phenomStock.updateRollingInnate(newLevel);
        this.phenomKnowledge.updateRollingInnate(newLevel);
    }
}