import {SUPER_TYPE_SKILL} from "./super-types";

export const SET_DEV_COST_SKILL = "set-dev-cost-skill";
export const REDUCE_DEV_COST_SKILL = "reduce-dev-cost-skill";

export const setDevCost2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: SET_DEV_COST_SKILL,
    key,
    value: Math.abs(value),
    source,
    note
});

export const reduceDevCost2Skill = (key, value, source = "", note = "") => ({
    superType: SUPER_TYPE_SKILL,
    type: REDUCE_DEV_COST_SKILL,
    key,
    value: Math.abs(value),
    source,
    note
});