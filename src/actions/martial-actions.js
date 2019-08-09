import {SUPER_TYPE_MARTIAL} from "./super-types";

export const MARTIAL_ADD_BASE_KI_RESERVE = "add-base-ki-pool";
export const MARTIAL_ADD_INNATE_KI_RESERVE = "add-innate-ki-pool";
export const MARTIAL_ADD_NATURAL_KI_RESERVE = "add-natural-ki-pool";
export const MARTIAL_ADD_INVEST_KI_RESERVE = "add-invest-ki-pool";

export const add2BaseKiReserve = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MARTIAL,
    type: MARTIAL_ADD_BASE_KI_RESERVE,
    key: "kiReserve",
    value,
    source,
    note
});

export const add2InnateKiReserve = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MARTIAL,
    type: MARTIAL_ADD_INNATE_KI_RESERVE,
    key: "kiReserve",
    value,
    source,
    note
});

export const add2NaturalKiReserve = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MARTIAL,
    type: MARTIAL_ADD_BASE_KI_RESERVE,
    key: "kiReserve",
    value,
    source,
    note
});

export const add2InvestKiReserve = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MARTIAL,
    type: MARTIAL_ADD_INVEST_KI_RESERVE,
    key: "kiReserve",
    value,
    source,
    note
});
