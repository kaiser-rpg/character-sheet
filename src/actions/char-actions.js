import {
    ADD_ALL_ACTION_FACTOR,
    ADD_DEED_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR,
    SET_BASE_VALUE,
    SUPER_TYPE_CHAR
} from "./super-types";
import {shortid} from "../reducers/SheetApp";

export const setBaseValueChar = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_CHAR,
    type: SET_BASE_VALUE,
    key,
    value,
    source,
    note
});

export const addNaturalFactor2Char = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_CHAR,
    type: ADD_NATURAL_FACTOR,
    key,
    value,
    source,
    note
});

export const addInvestFactor2Char = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_CHAR,
    type: ADD_INVEST_FACTOR,
    key,
    value: Math.abs(value),
    source,
    note
});

export const addAllActionFactor2Char = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_CHAR,
    type: ADD_ALL_ACTION_FACTOR,
    key,
    value,
    source,
    note
});

export const addDeedFactor2Char = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_CHAR,
    type: ADD_DEED_FACTOR,
    key,
    value,
    source,
    note
});

export const addQualityFactor2Char = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_CHAR,
    type: ADD_QUALITY_FACTOR,
    key,
    value,
    source,
    note
});

export const addPowerFactor2Char = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_CHAR,
    type: ADD_POWER_FACTOR,
    key,
    value,
    source,
    note
});