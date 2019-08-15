import AbilityList, {
    GeneralAbilities,
    MagicAbilities,
    ManifestAbilities,
    MartialAbilities
} from "../containers/raw/AbilityList";
import {
    ADD_ALL_ACTION_FACTOR,
    ADD_BASE_VALUE,
    ADD_DEED_FACTOR,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR,
    SUPER_TYPE_GENERAL,
    SUPER_TYPE_MAGIC,
    SUPER_TYPE_MANIFEST,
    SUPER_TYPE_MARTIAL
} from "../actions/super-types";
import {INNATE_BONUS_CLASS, INNATE_BONUS_FEATURE} from "../actions/innate-bonus-actions";

export function abilities(state = new AbilityList(), action) {
    let newState = Object.assign(new AbilityList(), state);

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

    let newState = Object.assign(new GeneralAbilities(), state);

    switch (action.type) {
        case ADD_BASE_VALUE:
            if (!newState[action.key] || !newState[action.key].baseValues) return state;
            newState[action.key].baseValues.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case ADD_INNATE_FACTOR:
        case ADD_NATURAL_FACTOR:
        case ADD_INVEST_FACTOR:
        case ADD_ALL_ACTION_FACTOR:
        case ADD_DEED_FACTOR:
        case ADD_QUALITY_FACTOR:
        case ADD_POWER_FACTOR:
            if (!newState[action.key] || !newState[action.key].factorValues) return state;
            newState[action.key].factorValues.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case INNATE_BONUS_CLASS:
        case INNATE_BONUS_FEATURE:
            if (!newState[action.key] || !newState[action.key].rollingInnate) return state;
            newState[action.key].rollingInnate.push(action);
            console.log(action.type, action.key, action);
            return newState;
        default:
            return state;
    }
}


function martialAbilities(state = new MartialAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MARTIAL) {
        return state;
    }

    let newState = Object.assign(new MartialAbilities(), state);

    switch (action.type) {
        case ADD_BASE_VALUE:
            if (!newState[action.key] || !newState[action.key].baseValues) return state;
            newState[action.key].baseValues.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case ADD_INNATE_FACTOR:
        case ADD_NATURAL_FACTOR:
        case ADD_INVEST_FACTOR:
        case ADD_ALL_ACTION_FACTOR:
        case ADD_DEED_FACTOR:
        case ADD_QUALITY_FACTOR:
        case ADD_POWER_FACTOR:
            if (!newState[action.key] || !newState[action.key].factorValues) return state;
            newState[action.key].factorValues.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case INNATE_BONUS_CLASS:
        case INNATE_BONUS_FEATURE:
            if (!newState[action.key] || !newState[action.key].rollingInnate) return state;
            newState[action.key].rollingInnate.push(action);
            console.log(action.type, action.key, action);
            return newState;
        default:
            return state;
    }
}

function magicAbilities(state = new MagicAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MAGIC) {
        return state;
    }

    let newState = Object.assign(new MagicAbilities(), state);

    switch (action.type) {
        case ADD_BASE_VALUE:
            if (!newState[action.key] || !newState[action.key].baseValues) return state;
            newState[action.key].baseValues.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case ADD_INNATE_FACTOR:
        case ADD_NATURAL_FACTOR:
        case ADD_INVEST_FACTOR:
        case ADD_ALL_ACTION_FACTOR:
        case ADD_DEED_FACTOR:
        case ADD_QUALITY_FACTOR:
        case ADD_POWER_FACTOR:
            if (!newState[action.key] || !newState[action.key].factors) return state;
            newState[action.key].factors.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case INNATE_BONUS_CLASS:
        case INNATE_BONUS_FEATURE:
            if (!newState[action.key] || !newState[action.key].rollingInnate) return state;
            newState[action.key].rollingInnate.push(action);
            console.log(action.type, action.key, action);
            return newState;
        default:
            return state;
    }
}

function manifestAbilities(state = new ManifestAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MANIFEST) {
        return state;
    }

    let newState = Object.assign(new ManifestAbilities(), state);

    switch (action.type) {
        case ADD_BASE_VALUE:
            if (!newState[action.key] || !newState[action.key].baseValues) return state;
            newState[action.key].baseValues.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case ADD_INNATE_FACTOR:
        case ADD_NATURAL_FACTOR:
        case ADD_INVEST_FACTOR:
        case ADD_ALL_ACTION_FACTOR:
        case ADD_DEED_FACTOR:
        case ADD_QUALITY_FACTOR:
        case ADD_POWER_FACTOR:
            if (!newState[action.key] || !newState[action.key].factors) return state;
            newState[action.key].factors.push(action);
            console.log(action.type, action.key, action);
            return newState;
        case INNATE_BONUS_CLASS:
        case INNATE_BONUS_FEATURE:
            if (!newState[action.key] || !newState[action.key].rollingInnate) return state;
            newState[action.key].rollingInnate.push(action);
            console.log(action.type, action.key, action);
            return newState;
        default:
            return state;
    }
}