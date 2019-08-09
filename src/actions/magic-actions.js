import {
    ADD_BASE_VALUE,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    SUPER_TYPE_MAGIC
} from "./super-types";

export const add2BaseManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: ADD_BASE_VALUE,
    key: "manaPool",
    value,
    source,
    note
});

export const add2InnateManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: ADD_INNATE_FACTOR,
    key: "manaPool",
    value,
    source,
    note
});

export const add2NaturalManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: ADD_NATURAL_FACTOR,
    key: "manaPool",
    value,
    source,
    note
});


export const add2InvestManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: ADD_INVEST_FACTOR,
    key: "manaPool",
    value,
    source,
    note
});