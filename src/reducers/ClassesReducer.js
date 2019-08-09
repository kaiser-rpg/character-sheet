import {LEVEL_UP} from "../actions/level-actions";
import {ADD_CLASS} from "../actions/class-actions";
import {skills} from "./SkillsReducer";
import ClassEntry from "../containers/raw/ClassEntry";


export function classes(state = {}, action) {
    // let newState = Object.assign(state);
    // // Send to skill reducer
    // return


    if (!action.source) {
        return state;
    }
    let newState = Object.assign(state);

    console.log("working on ", action.source)

    if (!state.hasOwnProperty(action.source)) {
        newState[action.source] = new ClassEntry(action.source);
    }
    let classEntry = newState[action.source];

    switch (action.type) {
        case ADD_CLASS:
            break;
        case LEVEL_UP:
            classEntry.level = action.newLevel;
        default:
            classEntry.skills = skills(classEntry.skills, action);
    }

    return newState;
}