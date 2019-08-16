import {
    ChakraEntry,
    KiReserve,
    LifePoints,
    ManaAccumulation,
    ManaKnowledge,
    ManaPool,
    ManaRecovery,
    PhenomKnowledge,
    PhenomStock,
    Potential,
    Presence,
    ResistanceEntry,
    SpiritKnowledge
} from "./Entry";

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
        this.redChakra = new ChakraEntry("red", ["str", "con"]);
        this.greenChakra = new ChakraEntry("green", ["dex", "agi"]);
        this.blueChakra = new ChakraEntry("blue", ["foc", "wp"]);
    }

    updateRollingInnate(newLevel) {
        this.kiReserve.updateRollingInnate(newLevel);
        this.spiritKnowledge.updateRollingInnate(newLevel);
        this.redChakra.updateRollingInnate(newLevel);
        this.greenChakra.updateRollingInnate(newLevel);
        this.blueChakra.updateRollingInnate(newLevel);
    }

    removeBySource(sourceName) {
        this.kiReserve.removeBySource(sourceName);
        this.spiritKnowledge.removeBySource(sourceName);
        this.redChakra.removeBySource(sourceName);
        this.greenChakra.removeBySource(sourceName);
        this.blueChakra.removeBySource(sourceName);
    }

    removeById(id) {
        this.kiReserve.removeById(id);
        this.spiritKnowledge.removeById(id);
        this.redChakra.removeById(id);
        this.greenChakra.removeById(id);
        this.blueChakra.removeById(id);
    }

}

export class MagicAbilities {

    constructor() {
        this.manaPool = new ManaPool();
        this.manaKnowledge = new ManaKnowledge();
        this.manaAccumulation = new ManaAccumulation();
        this.manaRecovery = new ManaRecovery();
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
        this.potential = new Potential();
    }

    updateRollingInnate(newLevel) {
        this.phenomStock.updateRollingInnate(newLevel);
        this.phenomKnowledge.updateRollingInnate(newLevel);
        this.potential.updateRollingInnate(newLevel);
    }

    removeBySource(sourceName) {
        this.phenomStock.removeBySource(sourceName);
        this.phenomKnowledge.removeBySource(sourceName);
        this.potential.removeBySource(sourceName)
    }

    removeById(id) {
        this.phenomStock.removeById(id);
        this.phenomKnowledge.removeById(id);
        this.potential.removeById(id);
    }
}