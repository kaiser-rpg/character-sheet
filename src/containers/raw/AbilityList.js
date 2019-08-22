import {
    KiReserve,
    LifePoints,
    ManaAccumulation,
    ManaKnowledge,
    ManaPool,
    ManaRecovery,
    MovementEntry,
    PhenomKnowledge,
    PhenomStock,
    Potential,
    Presence,
    ResistanceEntry,
    SpiritKnowledge,
    StaminaPoints
} from "./Entry";
import {
    investPp,
    investXpGeneral,
    investXpMagic,
    investXpManifest,
    investXpMartial
} from "../../actions/invest-actions";

export default class AbilityList {

    constructor() {
        this.generalAbilities = new GeneralAbilities();
        this.martialAbilities = new MartialAbilities();
        this.magicAbilities = new MagicAbilities();
        this.manifestAbilities = new ManifestAbilities();
    }

    get xp() {
        return {
            general: this.generalAbilities.xp,
            martial: this.martialAbilities.xp,
            magic: this.magicAbilities.xp,
            manifest: this.manifestAbilities.xp
        }
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
        this.immuneResistance = new ResistanceEntry("immune resistance", "con", "IR");
        this.spiritResistance = new ResistanceEntry("spirit resistance", "wp", "SR");
        this.mentalResistance = new ResistanceEntry("mental resistance", "foc", "MR");
        this.stamina = new StaminaPoints();
        this.groundMovement = new MovementEntry("ground");
        this.flightMovement = new MovementEntry("flight");
        this.swimMovement = new MovementEntry("swim");
        this.burrowMovement = new MovementEntry("burrow");

    }

    get xp() {
        return [
            investXpGeneral(this.lifePoints.key, this.lifePoints.cost, this.lifePoints.key)
        ];
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
        this.stamina.removeBySource(sourceName);
        this.groundMovement.removeBySource(sourceName);
        this.flightMovement.removeBySource(sourceName);
        this.swimMovement.removeBySource(sourceName);
        this.burrowMovement.removeBySource(sourceName);
    }

    removeById(id) {
        this.lifePoints.removeById(id);
        this.presence.removeById(id);
        this.physicalResistance.removeById(id);
        this.spiritResistance.removeById(id);
        this.mentalResistance.removeById(id);
        this.stamina.removeById(id);
        this.groundMovement.removeById(id);
        this.flightMovement.removeById(id);
        this.swimMovement.removeById(id);
        this.burrowMovement.removeById(id);
    }
}

export class MartialAbilities {

    constructor() {
        this.kiReserve = new KiReserve();
        this.spiritKnowledge = new SpiritKnowledge();
        // this.redChakra = new ChakraEntry("red", ["str", "con"]);
        // this.greenChakra = new ChakraEntry("green", ["dex", "agi"]);
        // this.blueChakra = new ChakraEntry("blue", ["foc", "wp"]);
    }

    get xp() {
        return [
            investXpMartial(this.kiReserve.key, this.kiReserve.cost, this.kiReserve.key),
            investXpMartial(this.spiritKnowledge.key, this.spiritKnowledge.cost, this.spiritKnowledge.key),
            // investXpMartial(this.redChakra.key, this.redChakra.cost, this.redChakra.key),
            // investXpMartial(this.greenChakra.key, this.greenChakra.cost, this.greenChakra.key),
            // investXpMartial(this.blueChakra.key, this.blueChakra.cost, this.blueChakra.key)
        ];
    }

    updateRollingInnate(newLevel) {
        this.kiReserve.updateRollingInnate(newLevel);
        this.spiritKnowledge.updateRollingInnate(newLevel);
        // this.redChakra.updateRollingInnate(newLevel);
        // this.greenChakra.updateRollingInnate(newLevel);
        // this.blueChakra.updateRollingInnate(newLevel);
    }

    removeBySource(sourceName) {
        this.kiReserve.removeBySource(sourceName);
        this.spiritKnowledge.removeBySource(sourceName);
        // this.redChakra.removeBySource(sourceName);
        // this.greenChakra.removeBySource(sourceName);
        // this.blueChakra.removeBySource(sourceName);
    }

    removeById(id) {
        this.kiReserve.removeById(id);
        this.spiritKnowledge.removeById(id);
        // this.redChakra.removeById(id);
        // this.greenChakra.removeById(id);
        // this.blueChakra.removeById(id);
    }

}

export class MagicAbilities {

    constructor() {
        this.manaPool = new ManaPool();
        this.manaKnowledge = new ManaKnowledge();
        this.manaAccumulation = new ManaAccumulation();
        this.manaRecovery = new ManaRecovery();
    }

    get xp() {
        return [
            investXpMagic(this.manaPool.key, this.manaPool.cost, this.manaPool.key),
            investXpMagic(this.manaKnowledge.key, this.manaKnowledge.cost, this.manaKnowledge.key),
            investXpMagic(this.manaAccumulation.key, this.manaAccumulation.cost, this.manaAccumulation.key),
            investXpMagic(this.manaRecovery.key, this.manaRecovery.cost, this.manaRecovery.key)
        ];
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

    get xp() {
        return [
            investXpManifest(this.phenomStock.key, this.phenomStock.cost, this.phenomStock.key),
            investXpManifest(this.phenomKnowledge.key, this.phenomKnowledge.cost, this.phenomKnowledge.key),
        ];
    }

    get pp() {
        return [
            investPp(this.potential.key, this.potential.cost, this.potential.key)
        ];
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