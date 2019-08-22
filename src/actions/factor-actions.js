import {
    ADD_ALL_ACTION_FACTOR,
    ADD_BASE_VALUE,
    ADD_DEED_FACTOR,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR,
    SET_BASE_VALUE,
} from "./super-types";
import {shortid} from "../reducers";

export const setBase = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: SET_BASE_VALUE,
    key,
    value,
    source,
    note
});

export const add2Base = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_BASE_VALUE,
    key,
    value,
    source,
    note
});

export const add2Innate = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_INNATE_FACTOR,
    key,
    value,
    source,
    note
});

export const add2Natural = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_NATURAL_FACTOR,
    key,
    value,
    source,
    note
});


export const add2Invest = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_INVEST_FACTOR,
    key,
    value,
    source,
    note
});

export const add2AllAction = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_ALL_ACTION_FACTOR,
    key,
    value,
    source,
    note
});

export const add2Deed = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_DEED_FACTOR,
    key,
    value,
    source,
    note
});

export const add2Quality = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_QUALITY_FACTOR,
    key,
    value,
    source,
    note
});

export const add2Power = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: ADD_POWER_FACTOR,
    key,
    value,
    source,
    note
});