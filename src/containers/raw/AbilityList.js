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

    removeBySource(sourceName) {
        this.generalAbilities.removeBySource(sourceName);
        this.martialAbilities.removeBySource(sourceName);
        this.magicAbilities.removeBySource(sourceName);
        this.manifestAbilities.removeBySource(sourceName);
    }

    removeById(id) {
        this.generalAbilities.removeById(id);
        this.martialAbilities.removeById(id);
        this.magicAbilities.removeById(id);
        this.manifestAbilities.removeById(id);
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

    removeBySource(sourceName) {
        this.lifePoints.removeBySource(sourceName);
        this.presence.removeBySource(sourceName);
        this.physicalResistance.removeBySource(sourceName);
        this.spiritResistance.removeBySource(sourceName);
        this.mentalResistance.removeBySource(sourceName);
    }

    removeById(id) {
        this.lifePoints.removeById(id);
        this.presence.removeById(id);
        this.physicalResistance.removeById(id);
        this.spiritResistance.removeById(id);
        this.mentalResistance.removeById(id);
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

    removeBySource(sourceName) {
        this.kiReserve.removeBySource(sourceName);
        this.spiritKnowledge.removeBySource(sourceName);
    }

    removeById(id) {
        this.kiReserve.removeById(id);
        this.spiritKnowledge.removeById(id);
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

    removeBySource(sourceName) {
        this.manaPool.removeBySource(sourceName);
        this.manaKnowledge.removeBySource(sourceName);
    }

    removeById(id) {
        this.manaPool.removeById(id);
        this.manaKnowledge.removeById(id);
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

    removeBySource(sourceName) {
        this.phenomStock.removeBySource(sourceName);
        this.phenomKnowledge.removeBySource(sourceName);
    }

    removeById(id) {
        this.phenomStock.removeById(id);
        this.phenomKnowledge.removeById(id);
    }
}