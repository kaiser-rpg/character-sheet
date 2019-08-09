import {SUPER_TYPE_GENERAL} from "./super-types";

export const GENERAL_ADD_BASE_LIFE_POINTS = "add-base-value-life-points";
export const GENERAL_ADD_INNATE_LIFE_POINTS = "add-innate-factor-life-points";
export const GENERAL_ADD_NATURAL_LIFE_POINTS = "add-natural-factor-life-points";
export const GENERAL_ADD_INVEST_LIFE_POINTS = "add-invest-factor-life-points";

export const GENERAL_ADD_POWER_FACTOR_LIFE_POINTS = "add-power-factor-life-points";

export const add2BaseLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: GENERAL_ADD_BASE_LIFE_POINTS,
    key: "ability.lifePoints",
    value,
    source,
    note
});

export const add2InnateLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: GENERAL_ADD_BASE_LIFE_POINTS,
    key: "ability.lifePoints",
    value,
    source,
    note
});

export const add2NaturalLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: GENERAL_ADD_BASE_LIFE_POINTS,
    key: "ability.lifePoints",
    value,
    source,
    note
});

export const add2InvestLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: GENERAL_ADD_BASE_LIFE_POINTS,
    key: "ability.lifePoints",
    value,
    source,
    note
});