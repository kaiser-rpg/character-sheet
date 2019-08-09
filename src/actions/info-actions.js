export const SET_CHARACTER_NAME = "set-character-name";
export const SET_CLASS_NAME = "set-class-name";
export const SET_MARTIAL_LIMIT = "set-martial-limit";
export const SET_MAGIC_LIMIT = "set-magic-limit";
export const SET_MANIFEST_LIMIT = "set-manifest-limit";


export const setCharacterName = (name) => ({
    type: SET_CHARACTER_NAME,
    name
});

export const setClassName = (name) => ({
    type: SET_CLASS_NAME,
    name
});

export const setMartialLimit = (percent) => ({
    type: SET_MARTIAL_LIMIT,
    percent
});

export const setMagicLimit = (percent) => ({
    type: SET_MAGIC_LIMIT,
    percent
});

export const setManifestLimit = (percent) => ({
    type: SET_MANIFEST_LIMIT,
    percent
});

