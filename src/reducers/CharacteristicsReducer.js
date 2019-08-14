import CharList from "../containers/raw/CharList";
import {
    ADD_ALL_ACTION_FACTOR,
    ADD_DEED_FACTOR,
    ADD_INVEST_FACTOR,
    ADD_NATURAL_FACTOR,
    ADD_POWER_FACTOR,
    ADD_QUALITY_FACTOR,
    SET_BASE_VALUE,
    SUPER_TYPE_CHAR
} from "../actions/super-types";

export function characteristics(state = new CharList(), action) {
    if (!action.key || action.superType !== SUPER_TYPE_CHAR) {
        return state;
    }

    let key = action.key;
    let newState = Object.assign(new CharList(), state);

    switch (action.type) {
        case SET_BASE_VALUE:
            newState.lookupChar(key).baseValue = action.value;
            console.log(action.type, action.key, action);
            return newState;
        case ADD_NATURAL_FACTOR:
        case ADD_INVEST_FACTOR:
        case ADD_ALL_ACTION_FACTOR:
        case ADD_DEED_FACTOR:
        case ADD_QUALITY_FACTOR:
        case ADD_POWER_FACTOR:
            let char = newState.lookupChar(action.key);
            if (!char || !char.factors) return state;
            char.factors.push(action);
            console.log(action.type, action.key, action);
            return newState;
        default:
            return state;
    }

}