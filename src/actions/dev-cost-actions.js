import {shortid} from "../reducers";

export const SET_DEV_COST = "set-dev-cost";
export const REDUCE_DEV_COST = "reduce-dev-cost";

export const setDevCost = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: SET_DEV_COST,
    key,
    value: Math.abs(value),
    source,
    note
});

export const reduceDevCost = (superType, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType,
    type: REDUCE_DEV_COST,
    key,
    value: Math.abs(value),
    source,
    note
});