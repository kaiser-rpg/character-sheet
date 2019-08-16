import {
    SUPER_TYPE_GENERAL,
    SUPER_TYPE_MAGIC,
    SUPER_TYPE_MANIFEST,
    SUPER_TYPE_MARTIAL,
    SUPER_TYPE_SKILL
} from "./super-types";
import {shortid} from "../reducers/SheetApp";

export const INVEST_XP = "invest-xp";

export const INVEST_SK = "invest-sk";

export const INVEST_MK = "invest-mk";

export const INVEST_PK = "invest-pk";

export const INVEST_PP = "invest-pp";


export const investXpSkill = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: INVEST_XP,
    key,
    value,
    source,
    note
});

export const investXpGeneral = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_GENERAL,
    type: INVEST_XP,
    key,
    value,
    source,
    note
});

export const investXpMartial = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_GENERAL,
    type: INVEST_XP,
    key,
    value,
    source,
    note
});

export const investXpMagic = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_GENERAL,
    type: INVEST_XP,
    key,
    value,
    source,
    note
});

export const investXpManifest = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_GENERAL,
    type: INVEST_XP,
    key,
    value,
    source,
    note
});

export const investSk = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MARTIAL,
    type: INVEST_SK,
    key,
    value,
    source,
    note
});

export const investMk = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MAGIC,
    type: INVEST_MK,
    key,
    value,
    source,
    note
});

export const investPk = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MANIFEST,
    type: INVEST_PK,
    key,
    value,
    source,
    note
});

export const investPp = (key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_MANIFEST,
    type: INVEST_PP,
    key,
    value,
    source,
    note
});