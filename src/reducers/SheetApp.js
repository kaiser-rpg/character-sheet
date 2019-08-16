import {createStore} from "redux";
import Makeup from "../containers/Makeup";
import {characteristics} from "./CharacteristicsReducer";
import {skills} from "./SkillsReducer";
import {info} from "./InfoReducer";
import {abilities} from "./AbilitiesReducer";
import undoable from 'redux-undo';
import {
    SUPER_TYPE_CHAR,
    SUPER_TYPE_GENERAL,
    SUPER_TYPE_MAGIC,
    SUPER_TYPE_MANIFEST,
    SUPER_TYPE_MARTIAL,
    SUPER_TYPE_SKILL
} from "../actions/super-types";
import {LEVEL_UP} from "../actions/level-actions";
import {DELETE_ID} from "../actions/sheet-actions";

export const shortid = require('shortid');

function sheetReducer(state = new Makeup(), action) {
    let newState = Object.assign(new Makeup(), state);

    newState.info = info(newState.info, action);

    switch (action.type) {
        case LEVEL_UP:
            console.log("level up", action.newLevel);
            newState.updateRollingInnate(action.newLevel);
            return newState;
        case DELETE_ID:
            console.log("delete", action.id);
            newState.removeById(action.id);
            return newState;
        default:
            break;
    }

    if (!action._id) {
        action._id = shortid.generate();
    }

    switch (action.superType) {
        case SUPER_TYPE_CHAR:
            newState.characteristics = characteristics(newState.characteristics, action);
            break;
        case SUPER_TYPE_SKILL:
            newState.skills = skills(newState.skills, action);
            break;
        case SUPER_TYPE_GENERAL:
        case SUPER_TYPE_MARTIAL:
        case SUPER_TYPE_MAGIC:
        case SUPER_TYPE_MANIFEST:
            newState.abilities = abilities(newState.abilities, action);
            break;
        default:
            break;
    }

    return newState;
}

const undoableApp = undoable(sheetReducer, {
    limit: 10
});

export const sheet = createStore(undoableApp, new Makeup());
export const presentSheet = () => sheet.getState().present;
sheet.subscribe(() => console.log(presentSheet(), sheet.getState()));