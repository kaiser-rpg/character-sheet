import {
    SET_CHARACTER_NAME,
    SET_CLASS_NAME,
    SET_MAGIC_LIMIT,
    SET_MANIFEST_LIMIT,
    SET_MARTIAL_LIMIT
} from "../actions/info-actions";
import Info from "../containers/raw/Info";


export function info(state = new Info(), action) {
    let newState = Object.assign(state);

    switch (action.type) {
        case SET_CHARACTER_NAME:
            newState.name = action.name;
            break;
        case SET_CLASS_NAME:
            newState.className = action.name;
            break;
        case SET_MARTIAL_LIMIT:
            newState.martialLimit = action.percent < 1 ? action.percent * 100 : action.percent;
            return newState;
        case SET_MAGIC_LIMIT:
            newState.magicLimit = action.percent < 1 ? action.percent * 100 : action.percent;
            return newState;
        case SET_MANIFEST_LIMIT:
            newState.manifestLimit = action.percent < 1 ? action.percent * 100 : action.percent;
            return newState;
        default:
            break;
    }

    return newState;
}