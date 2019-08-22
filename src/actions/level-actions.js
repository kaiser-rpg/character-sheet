import {shortid} from "../reducers";

export const LEVEL_UP = "level-up";

export const increaseLevel = (newLevel, source, note) => ({
    _id: shortid.generate(),
    type: LEVEL_UP,
    className: source,
    newLevel,
    key: "skill.all",
    source,
    note
});