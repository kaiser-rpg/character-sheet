import {SUPER_TYPE_MANIFEST} from "./super-types";

export const MANIFEST_ADD_BASE_PHENOM_STOCK = "add-base-phenom-stock";
export const MANIFEST_ADD_INNATE_PHENOM_STOCK = "add-innate-phenom-stock";
export const MANIFEST_ADD_NATURAL_PHENOM_STOCK = "add-natural-phenom-stock";
export const MANIFEST_ADD_INVEST_PHENOM_STOCK = "add-invest-phenom-stock";

export const add2BasePhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: MANIFEST_ADD_BASE_PHENOM_STOCK,
    key: "phenomStock",
    value,
    source,
    note
});

export const add2InnatePhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: MANIFEST_ADD_INNATE_PHENOM_STOCK,
    key: "phenomStock",
    value,
    source,
    note
});

export const add2NaturalPhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: MANIFEST_ADD_NATURAL_PHENOM_STOCK,
    key: "phenomStock",
    value,
    source,
    note
});

export const add2InvestPhenomStock = (value, source = "", note = "") => ({
    superType: SUPER_TYPE_MANIFEST,
    type: MANIFEST_ADD_INVEST_PHENOM_STOCK,
    key: "phenomStock",
    value,
    source,
    note
});