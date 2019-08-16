import {shortid} from "../reducers/SheetApp";
import {SUPER_TYPE_SKILL} from "./super-types";

export const ADD_TIED_SKILL = "tied-skill";

export const addTie2Skill = (key, tieKey, value, source = "", note = "") => ({
    _id: shortid.generate(),
    superType: SUPER_TYPE_SKILL,
    type: ADD_TIED_SKILL,
    key,
    tieKey,
    value,
    source,
    note
});