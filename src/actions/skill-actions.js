import {
    ADD_ALL_ACTION_FACTOR,
    ADD_BASE_VALUE,
    ADD_DEED_FACTOR,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR,
    SUPER_TYPE_SKILL
} from "./super-types";
import {shortid} from "../reducers/SheetApp";

export const addBaseValue2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_BASE_VALUE,
    key,
    value,
    source,
    note
});

export const addInnateFactor2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_INNATE_FACTOR,
    key,
    value,
    source,
    note
});

export const addNaturalFactor2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_NATURAL_FACTOR,
    key,
    value,
    source,
    note
});

export const addInvestFactor2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_INVEST_FACTOR,
    key,
    value,
    source,
    note
});

export const addAllActionFactor2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_ALL_ACTION_FACTOR,
    key,
    value,
    source,
    note
});

export const addDeedFactor2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_DEED_FACTOR,
    key,
    value,
    source,
    note
});

export const addQualityFactor2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_QUALITY_FACTOR,
    key,
    value,
    source,
    note
});

export const addPowerFactor2Skill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_POWER_FACTOR,
    key,
    value,
    source,
    note
});