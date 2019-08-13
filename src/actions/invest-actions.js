import {SUPER_TYPE_SKILL} from "./super-types";
import {shortid} from "../reducers/SheetApp";

export const INVEST_XP_SKILL = "invest-xp-skill";
export const INVEST_XP_ABILITY = "invest-xp-ability";

export const INVEST_SK_TALENT = "invest-sk-talent";
export const INVEST_SK_TECH = "invest-sk-tech";

export const INVEST_MK_SPELL = "invest-mk-spell";
export const INVEST_MK_PRINCIPLE = "invest-mk-principle";

export const INVEST_PP_DISCIPLINE = "invest-pp-discipline";
export const INVEST_PP_DEGREE = "invest-pp-degree";


export const investXpSkill = (className, key, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: INVEST_XP_SKILL,
    className,
    key,
    value,
    source,
    note
});