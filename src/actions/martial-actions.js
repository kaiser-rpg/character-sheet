import {
    ADD_BASE_VALUE,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    SUPER_TYPE_MARTIAL
} from "./super-types";
import {shortid} from "../reducers";

export const add2BaseKiReserve = (value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MARTIAL,
    type: ADD_BASE_VALUE,
    key: "kiReserve",
    value,
    source,
    note
});

export const add2InnateKiReserve = (value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MARTIAL,
    type: ADD_INNATE_FACTOR,
    key: "kiReserve",
    value,
    source,
    note
});

export const add2NaturalKiReserve = (value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MARTIAL,
    type: ADD_NATURAL_FACTOR,
    key: "kiReserve",
    value,
    source,
    note
});

export const add2InvestKiReserve = (value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MARTIAL,
    type: ADD_INVEST_FACTOR,
    key: "kiReserve",
    value,
    source,
    note
});
