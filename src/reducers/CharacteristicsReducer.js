import {allActionFactor, deedFactor, naturalFactor, powerFactor, qualityFactor} from "../containers/raw/Factor";
import CharList from "../containers/raw/CharList";
import {
    ADD_ALL_ACTION_FACTOR,
    ADD_DEED_FACTOR,
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
    let newState = Object.assign(state);

    switch (action.type) {
        case SET_BASE_VALUE:
            newState.lookupChar(key).baseValue = action.value;
            console.log("setting Base Char Value to ", action.key);

            return newState;
        case ADD_NATURAL_FACTOR:
            newState.lookupChar(key).factors.push(naturalFactor(action.value, action.source, action.note));
            console.log("added natural factor to ", action.key);

            return newState;
        case ADD_ALL_ACTION_FACTOR:
            newState.lookupChar(key).factors.push(allActionFactor(action.value, action.source, action.note));
            console.log("added all action factor to ", action.key);

            return newState;
        case ADD_DEED_FACTOR:
            newState.lookupChar(key).factors.push(deedFactor(action.value, action.source, action.note));
            console.log("added deed factor to ", action.key);

            return newState;
        case ADD_QUALITY_FACTOR:
            newState.lookupChar(key).factors.push(qualityFactor(action.value, action.source, action.note));
            console.log("added quality factor to ", action.key);

            return newState;
        case ADD_POWER_FACTOR:
            newState.lookupChar(key).factors.push(powerFactor(action.value, action.source, action.note));
            console.log("added power factor to ", action.key);

            return newState;
        default:
            return state;
    }

}