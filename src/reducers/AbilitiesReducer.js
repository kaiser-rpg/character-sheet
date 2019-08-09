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
import {
    GENERAL_ADD_BASE_LIFE_POINTS,
    GENERAL_ADD_INNATE_LIFE_POINTS,
    GENERAL_ADD_INVEST_LIFE_POINTS,
    GENERAL_ADD_NATURAL_LIFE_POINTS
} from "../actions/general-actions";
import {innateFactor, investFactor, naturalFactor} from "../containers/raw/Factor";
import {
    MARTIAL_ADD_BASE_KI_RESERVE,
    MARTIAL_ADD_INNATE_KI_RESERVE,
    MARTIAL_ADD_INVEST_KI_RESERVE,
    MARTIAL_ADD_NATURAL_KI_RESERVE
} from "../actions/martial-actions";
import {
    MAGIC_ADD_BASE_MANA_POOL,
    MAGIC_ADD_INNATE_MANA_POOL,
    MAGIC_ADD_INVEST_MANA_POOL,
    MAGIC_ADD_NATURAL_MANA_POOL
} from "../actions/magic-actions";
import {
    MANIFEST_ADD_BASE_PHENOM_STOCK,
    MANIFEST_ADD_INNATE_PHENOM_STOCK,
    MANIFEST_ADD_INVEST_PHENOM_STOCK,
    MANIFEST_ADD_NATURAL_PHENOM_STOCK
} from "../actions/manifest-actions";

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
            newState.martialAbilities = magicAbilities(newState.magicAbilities, action);
            return newState;
        case SUPER_TYPE_MANIFEST:
            newState.martialAbilities = manifestAbilities(newState.manifestAbilities, action);
            return newState;
        default:
            return state;
    }
}

function generalAbilities(state = new GeneralAbilities(), action) {
    if (action.superType !== SUPER_TYPE_GENERAL) {
        return state;
    }

    let key = action.key;
    let newState = Object.assign(state);

    switch (key) {
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
                default:
                    return state;
            }
        default:
            return state;
    }

    switch (action.type) {
        case GENERAL_ADD_BASE_LIFE_POINTS:
            newState.lifePoints.baseValue += action.value;
            console.log("added base value to life points");
            return newState;
        case GENERAL_ADD_INNATE_LIFE_POINTS:
            newState.lifePoints.factors.push(new innateFactor(action.value, action.source, action.note));
            console.log("added innate factor to life points");
            return newState;
        case GENERAL_ADD_NATURAL_LIFE_POINTS:
            newState.lifePoints.factors.push(new naturalFactor(action.value, action.source, action.note));
            console.log("added natural factor to life points");
            return newState;
        case GENERAL_ADD_INVEST_LIFE_POINTS:
            newState.lifePoints.factors.push(new investFactor(action.value, action.source, action.note));
            console.log("added invest factor to life points");
            return newState;
        default:
            return state;
    }
}


function martialAbilities(state = new MartialAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MARTIAL) {
        return state;
    }

    let newState = Object.assign(state);

    switch (action.type) {
        case MARTIAL_ADD_BASE_KI_RESERVE:
            newState.kiReserve.baseValue += action.value;
            console.log("added base value to ki reserve");
            return newState;
        case MARTIAL_ADD_INNATE_KI_RESERVE:
            newState.kiReserve.factors.push(new innateFactor(action.value, action.source, action.note));
            console.log("added innate factor to ki reserve");
            return newState;
        case MARTIAL_ADD_NATURAL_KI_RESERVE:
            newState.kiReserve.factors.push(new naturalFactor(action.value, action.source, action.note));
            console.log("added natural factor to ki reserve");
            return newState;
        case MARTIAL_ADD_INVEST_KI_RESERVE:
            newState.kiReserve.factors.push(new investFactor(action.value, action.source, action.note));
            console.log("added invest factor to ki reserve");
            return newState;
        default:
            return state;
    }
}

function magicAbilities(state = new MagicAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MAGIC) {
        return state;
    }

    let newState = Object.assign(state);

    switch (action.type) {
        case MAGIC_ADD_BASE_MANA_POOL:
            newState.manaPool.baseValue += action.value;
            console.log("added base value to mana pool");
            return newState;
        case MAGIC_ADD_INNATE_MANA_POOL:
            newState.manaPool.factors.push(new innateFactor(action.value, action.source, action.note));
            console.log("added innate factor to mana pool");
            return newState;
        case MAGIC_ADD_NATURAL_MANA_POOL:
            newState.manaPool.factors.push(new naturalFactor(action.value, action.source, action.note));
            console.log("added natural factor to mana pool");
            return newState;
        case MAGIC_ADD_INVEST_MANA_POOL:
            newState.manaPool.factors.push(new investFactor(action.value, action.source, action.note));
            console.log("added invest factor to mana pool");
            return newState;
        default:
            return state;
    }
}

function manifestAbilities(state = new ManifestAbilities(), action) {
    if (action.superType !== SUPER_TYPE_MANIFEST) {
        return state;
    }

    let newState = Object.assign(state);

    switch (action.type) {
        case MANIFEST_ADD_BASE_PHENOM_STOCK:
            newState.phenomStock.baseValue += action.value;
            console.log("added base value to phenom stock");
            return newState;
        case MANIFEST_ADD_INNATE_PHENOM_STOCK:
            newState.phenomStock.factors.push(new innateFactor(action.value, action.source, action.note));
            console.log("added innate factor to phenom stock");
            return newState;
        case MANIFEST_ADD_NATURAL_PHENOM_STOCK:
            newState.phenomStock.factors.push(new naturalFactor(action.value, action.source, action.note));
            console.log("added natural factor to phenom stock");
            return newState;
        case MANIFEST_ADD_INVEST_PHENOM_STOCK:
            newState.phenomStock.factors.push(new investFactor(action.value, action.source, action.note));
            console.log("added invest factor to phenom stock");
            return newState;
        default:
            return state;
    }
}