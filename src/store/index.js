import undoable from "redux-undo";
import {createStore} from "redux";
import rootReducer from "../reducers";
import Makeup from "../containers/Makeup";


const undoableApp = undoable(rootReducer, {
    limit: 10
});
const initialState = new Makeup();

const store = createStore(undoableApp, new Makeup());
store.subscribe(() => console.log(store.getState().present, store.getState()));
window.store = store;

export default store;

export function present() {
    return store.getState().present;
}