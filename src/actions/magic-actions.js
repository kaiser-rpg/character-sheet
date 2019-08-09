import {SUPER_TYPE_MAGIC} from "./super-types";

export const MAGIC_ADD_BASE_MANA_POOL = "add-base-mana-pool";
export const MAGIC_ADD_INNATE_MANA_POOL = "add-innate-mana-pool";
export const MAGIC_ADD_NATURAL_MANA_POOL = "add-natural-mana-pool";
export const MAGIC_ADD_INVEST_MANA_POOL = "add-invest-mana-pool";

export const add2BaseManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: MAGIC_ADD_BASE_MANA_POOL,
    key: "manaPool",
    value,
    source,
    note
});

export const add2InnateManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: MAGIC_ADD_INNATE_MANA_POOL,
    key: "manaPool",
    value,
    source,
    note
});

export const add2NaturalManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: MAGIC_ADD_NATURAL_MANA_POOL,
    key: "manaPool",
    value,
    source,
    note
});


export const add2InvestManaPool = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MAGIC,
    type: MARTIAL_ADD_BASE_KI_RESERVE,
    key: "manaPool",
    value,
    source,
    note
});