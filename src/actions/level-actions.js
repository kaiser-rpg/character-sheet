export const LEVEL_UP = "level-up";

export const increaseLevel = (newLevel, source, note) => ({
    type: LEVEL_UP,
    className: source,
    newLevel,
    key: "skill.all",
    source,
    note
});