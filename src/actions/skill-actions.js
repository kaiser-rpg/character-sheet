import {SUPER_TYPE_SKILL} from "./super-types";

export const ADD_BASE_VALUE_SKILL = "add-base-value-skill";
export const ADD_INNATE_FACTOR_SKILL = "add-innate-factor-skill";
export const ADD_NATURAL_FACTOR_SKILL = "add-natural-factor-skill";
export const ADD_INVEST_FACTOR_SKILL = "add-invest-factor-skill";

export const ADD_ALL_ACTION_FACTOR_SKILL = "add-all-action-factor-skill";
export const ADD_DEED_FACTOR_SKILL = "add-deed-factor-skill";
export const ADD_QUALITY_FACTOR_SKILL = "add-quality-factor-skill";
export const ADD_POWER_FACTOR_SKILL = "add-power-factor-skill";


export const addBaseValue2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_BASE_VALUE_SKILL,
    key,
    value,
    source,
    note
});

export const addInnateFactor2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_INNATE_FACTOR_SKILL,
    key,
    value,
    source,
    note
});

export const addNaturalFactor2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_NATURAL_FACTOR_SKILL,
    key,
    value,
    source,
    note
});

export const addInvestFactor2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_INVEST_FACTOR_SKILL,
    key,
    value,
    source,
    note
});

export const addAllActionFactor2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_ALL_ACTION_FACTOR_SKILL,
    key,
    value,
    source,
    note
});

export const addDeedFactor2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_DEED_FACTOR_SKILL,
    key,
    value,
    source,
    note
});

export const addQualityFactor2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_QUALITY_FACTOR_SKILL,
    key,
    value,
    source,
    note
});

export const addPowerFactor2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: ADD_POWER_FACTOR_SKILL,
    key,
    value,
    source,
    note
});