import {
    ADD_BASE_VALUE,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    SUPER_TYPE_MANIFEST
} from "./super-types";

export const add2BasePhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: ADD_BASE_VALUE,
    key: "phenomStock",
    value,
    source,
    note
});

export const add2InnatePhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: ADD_INNATE_FACTOR,
    key: "phenomStock",
    value,
    source,
    note
});

export const add2NaturalPhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: ADD_NATURAL_FACTOR,
    key: "phenomStock",
    value,
    source,
    note
});

export const add2InvestPhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: ADD_INVEST_FACTOR,
    key: "phenomStock",
    value,
    source,
    note
});