import {
    ADD_BASE_VALUE,
    ADD_INNATE_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    SUPER_TYPE_GENERAL
} from "./super-types";

export const add2BaseLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: ADD_BASE_VALUE,
    key: "ability.lifePoints",
    value,
    source,
    note
});

export const add2InnateLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: ADD_INNATE_FACTOR,
    key: "ability.lifePoints",
    value,
    source,
    note
});

export const add2NaturalLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: ADD_NATURAL_FACTOR,
    key: "ability.lifePoints",
    value,
    source,
    note
});

export const add2InvestLifePoints = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_GENERAL,
    type: ADD_INVEST_FACTOR,
    key: "ability.lifePoints",
    value,
    source,
    note
});