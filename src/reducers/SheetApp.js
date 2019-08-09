import {combineReducers, createStore} from "redux";
import Makeup from "../containers/Makeup";
import {characteristics} from "./CharacteristicsReducer";
import {skills} from "./SkillsReducer";
import {info} from "./InfoReducer";
import {abilities} from "./AbilitiesReducer";
import undoable from 'redux-undo';

const sheetApp = combineReducers({
    info,
    skills,
    characteristics,
    abilities
    // classes
});

const undoableApp = undoable(sheetApp);

export const sheet = createStore(undoableApp, new Makeup());
export const presentSheet = sheet.getState().present;
sheet.subscribe(() => console.log(presentSheet, sheet.getState()));