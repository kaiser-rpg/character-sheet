import AbilityList, {
    GeneralAbilities,
    MagicAbilities,
    ManifestAbilities,
    MartialAbilities
} from "../containers/raw/AbilityList";
import {
    ADD_BASE_VALUE,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    SUPER_TYPE_GENERAL,
    SUPER_TYPE_MAGIC,
    SUPER_TYPE_MANIFEST,
    SUPER_TYPE_MARTIAL
} from "../actions/super-types";
import {innateFactor, investFactor, naturalFactor} from "../containers/raw/Factor";
import {INNATE_BONUS_CLASS, INNATE_BONUS_FEATURE} from "../actions/innate-bonus-actions";

export function abilities(state = new AbilityList(), action) {
    let newState = Object.assign(state);

    switch (action.superType) {
        case SUPER_TYPE_GENERAL:
            newState.generalAbilities = generalAbilities(newState.generalAbilities, action);
            return newState;
        case SUPER_TYPE_MARTIAL:
            newState.martialAbilities = martialAbilities(newState.martialAbilities, action);
            return newState;
        case SUPER_TYPE_MAGIC:
            newState.magicAbilities = magicAbilities(newState.magicAbilities, action);
            return newState;
        case SUPER_TYPE_MANIFEST:
            newState.manifestAbilities = manifestAbilities(newState.manifestAbilities, action);
            return newState;
        default:
            return state;
    }
}

function generalAbilities(state = new GeneralAbilities(), action) {
    if (action.superType !== SUPER_TYPE_GENERAL) {
        return state;
    }

    let newState = Object.assign(state);

    switch (action.key) {
        case newState.lifePoints.key:
            switch (action.type) {
                case ADD_BASE_VALUE:
                    newState.lifePoints.baseValue += action.value;
                    console.log("added base value to life points");
                    return newState;
                case ADD_INNATE_FACTOR:
                    newState.lifePoints.factors.push(new innateFactor(action.value, action.source, action.note));
                    console.log("added innate factor to life points");
                    return newState;
                case ADD_NATURAL_FACTOR:
                    newState.lifePoints.factors.push(new naturalFactor(action.value, action.source, action.note));
                    console.log("added natural factor to life points");
                    return newState;
                case ADD_INVEST_FACTOR:
                    newState.lifePoints.factors.push(new investFactor(action.value, action.source, action.note));
                    console.log("added invest factor to life points");
                    return newState;
                case INNATE_BONUS_CLASS:
                case INNATE_BONUS_FEATURE:
                    newState.lifePoints.rollingInnate.push(action);
                    console.log("add innate to ", action.key, action);
                    return newState;
                default:
                    return state;
            }
        default:
            return state;
    }
}


function martialAbilities(state = new MartialAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MARTIAL) {
        return state;
    }

    let newState = Object.assign(state);

    switch (action.key) {
        case newState.kiReserve.key:
            switch (action.type) {
                case ADD_BASE_VALUE:
                    newState.kiReserve.baseValue += action.value;
                    console.log("added base value to ki reserve");
                    return newState;
                case ADD_INNATE_FACTOR:
                    newState.kiReserve.factors.push(new innateFactor(action.value, action.source, action.note));
                    console.log("added innate factor to ki reserve");
                    return newState;
                case ADD_NATURAL_FACTOR:
                    newState.kiReserve.factors.push(new naturalFactor(action.value, action.source, action.note));
                    console.log("added natural factor to ki reserve");
                    return newState;
                case ADD_INVEST_FACTOR:
                    newState.kiReserve.factors.push(new investFactor(action.value, action.source, action.note));
                    console.log("added invest factor to ki reserve");
                    return newState;
                case INNATE_BONUS_CLASS:
                case INNATE_BONUS_FEATURE:
                    newState.kiReserve.rollingInnate.push(action);
                    console.log("add innate to ", action.key, action);
                    return newState;
                default:
                    return state;
            }
        case newState.spiritKnowledge.key:
            switch (action.type) {
                case ADD_BASE_VALUE:
                    newState.spiritKnowledge.baseValue += action.value;
                    console.log("added base value to spirit knowledge");
                    return newState;
                case ADD_INNATE_FACTOR:
                    newState.spiritKnowledge.factors.push(new innateFactor(action.value, action.source, action.note));
                    console.log("added innate factor to spirit knowledge");
                    return newState;
                case ADD_NATURAL_FACTOR:
                    newState.spiritKnowledge.factors.push(new naturalFactor(action.value, action.source, action.note));
                    console.log("added natural factor to spirit knowledge");
                    return newState;
                case ADD_INVEST_FACTOR:
                    newState.spiritKnowledge.factors.push(new investFactor(action.value, action.source, action.note));
                    console.log("added invest factor to spirit knowledge");
                    return newState;
                case INNATE_BONUS_CLASS:
                case INNATE_BONUS_FEATURE:
                    newState.spiritKnowledge.rollingInnate.push(action);
                    console.log("add innate to ", action.key, action);
                    return newState;
                default:
                    return state;
            }
        default:
            return state;
    }
}

function magicAbilities(state = new MagicAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MAGIC) {
        return state;
    }

    let newState = Object.assign(state);

    switch (action.key) {
        case newState.manaPool.key:
            switch (action.type) {
                case ADD_BASE_VALUE:
                    newState.manaPool.baseValue += action.value;
                    console.log("added base value to mana pool");
                    return newState;
                case ADD_INNATE_FACTOR:
                    newState.manaPool.factors.push(new innateFactor(action.value, action.source, action.note));
                    console.log("added innate factor to mana pool");
                    return newState;
                case ADD_NATURAL_FACTOR:
                    newState.manaPool.factors.push(new naturalFactor(action.value, action.source, action.note));
                    console.log("added natural factor to mana pool");
                    return newState;
                case ADD_INVEST_FACTOR:
                    newState.manaPool.factors.push(new investFactor(action.value, action.source, action.note));
                    console.log("added invest factor to mana pool");
                    return newState;
                case INNATE_BONUS_CLASS:
                case INNATE_BONUS_FEATURE:
                    newState.manaPool.rollingInnate.push(action);
                    console.log("add innate to ", action.key, action);
                    return newState;
                default:
                    return state;
            }
        case newState.manaKnowledge.key:
            switch (action.type) {
                case ADD_BASE_VALUE:
                    newState.manaKnowledge.baseValue += action.value;
                    console.log("added base value to mana knowledge");
                    return newState;
                case ADD_INNATE_FACTOR:
                    newState.manaKnowledge.factors.push(new innateFactor(action.value, action.source, action.note));
                    console.log("added innate factor to mana knowledge");
                    return newState;
                case ADD_NATURAL_FACTOR:
                    newState.manaKnowledge.factors.push(new naturalFactor(action.value, action.source, action.note));
                    console.log("added natural factor to mana knowledge");
                    return newState;
                case ADD_INVEST_FACTOR:
                    newState.manaKnowledge.factors.push(new investFactor(action.value, action.source, action.note));
                    console.log("added invest factor to mana knowledge");
                    return newState;
                case INNATE_BONUS_CLASS:
                case INNATE_BONUS_FEATURE:
                    newState.manaKnowledge.rollingInnate.push(action);
                    console.log("add innate to ", action.key, action);
                    return newState;
                default:
                    return state;
            }
        default:
            return state;
    }
}

function manifestAbilities(state = new ManifestAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MANIFEST) {
        return state;
    }

    let newState = Object.assign(state);

    switch (action.key) {
        case newState.phenomStock.key:
            switch (action.type) {
                case ADD_BASE_VALUE:
                    newState.phenomStock.baseValue += action.value;
                    console.log("added base value to phenom stock");
                    return newState;
                case ADD_INNATE_FACTOR:
                    newState.phenomStock.factors.push(new innateFactor(action.value, action.source, action.note));
                    console.log("added innate factor to phenom stock");
                    return newState;
                case ADD_NATURAL_FACTOR:
                    newState.phenomStock.factors.push(new naturalFactor(action.value, action.source, action.note));
                    console.log("added natural factor to phenom stock");
                    return newState;
                case ADD_INVEST_FACTOR:
                    newState.phenomStock.factors.push(new investFactor(action.value, action.source, action.note));
                    console.log("added invest factor to phenom stock");
                    return newState;
                case INNATE_BONUS_CLASS:
                case INNATE_BONUS_FEATURE:
                    newState.phenomStock.rollingInnate.push(action);
                    console.log("add innate to ", action.key, action);
                    return newState;
                default:
                    return state;
            }
        case newState.phenomKnowledge.key:
            switch (action.type) {
                case ADD_BASE_VALUE:
                    newState.phenomKnowledge.baseValue += action.value;
                    console.log("added base value to phenom knowledge");
                    return newState;
                case ADD_INNATE_FACTOR:
                    newState.phenomKnowledge.factors.push(new innateFactor(action.value, action.source, action.note));
                    console.log("added innate factor to phenom knowledge");
                    return newState;
                case ADD_NATURAL_FACTOR:
                    newState.phenomKnowledge.factors.push(new naturalFactor(action.value, action.source, action.note));
                    console.log("added natural factor to phenom knowledge");
                    return newState;
                case ADD_INVEST_FACTOR:
                    newState.phenomKnowledge.factors.push(new investFactor(action.value, action.source, action.note));
                    console.log("added invest factor to phenom knowledge");
                    return newState;
                case INNATE_BONUS_CLASS:
                case INNATE_BONUS_FEATURE:
                    newState.phenomKnowledge.rollingInnate.push(action);
                    console.log("add innate to ", action.key, action);
                    return newState;
                default:
                    return state;
            }
        default:
            return state;
    }
}