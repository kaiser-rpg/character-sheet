import {
    SET_CHARACTER_NAME,
    SET_CLASS_NAME,
    SET_HERITAGE_PRIME,
    SET_HERITAGE_SECONDARY,
    SET_MAGIC_LIMIT,
    SET_MANIFEST_LIMIT,
    SET_MARTIAL_LIMIT
} from "../actions/info-actions";
import Info from "../containers/Info";


export function info(state = new Info(), action) {
    let newState = Object.assign(new Info(), state);

    switch (action.type) {
        case SET_CHARACTER_NAME:
            console.log("set name", action.name, action);
            newState.name = action.name;
            break;
        case SET_CLASS_NAME:
            console.log("set class", action.name, action);
            newState.className = action.name;
            break;
        case SET_HERITAGE_PRIME:
            if (newState.heritageSecondary === action.value) {
                newState.heritageSecondary = "";
            }
            console.log("set heritage prime", action.value, action);
            newState.heritagePrime = action.value;
            break;
        case SET_HERITAGE_SECONDARY:
            if (newState.heritagePrime === action.value) break;
            console.log("set heritage secondary", action.value, action);
            newState.heritageSecondary = action.value;
            break;
        case SET_MARTIAL_LIMIT:
            newState.martialLimit = action.percent < 1 ? action.percent * 100 : action.percent;
            break;
        case SET_MAGIC_LIMIT:
            newState.magicLimit = action.percent < 1 ? action.percent * 100 : action.percent;
            break;
        case SET_MANIFEST_LIMIT:
            newState.manifestLimit = action.percent < 1 ? action.percent * 100 : action.percent;
            break;
        default:
            break;
    }

    return newState;
}