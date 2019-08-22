import {shortid} from "../reducers";

export const INNATE_BONUS_CLASS = "innate-bonus-class";
export const INNATE_BONUS_FEATURE = "innate-bonus-feature";

export const innateBonusClass = (superType, key, value, level, source, note) => ({
    _id: shortid.generate(),
    superType,
    type: INNATE_BONUS_CLASS,
    key,
    value: Math.abs(value),
    level,
    source,
    note
});

export const innateBonusFeature = (superType, key, value, level, source, note) => ({
    _id: shortid.generate(),
    superType,
    type: INNATE_BONUS_FEATURE,
    key,
    value: Math.abs(value),
    level,
    source,
    note
});