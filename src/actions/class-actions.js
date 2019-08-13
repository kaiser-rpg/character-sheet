import {shortid} from "../reducers/SheetApp";

export const ADD_CLASS = "add-class";

export const addNewClass = (className, source, note) => ({
    _id: shortid.generate(),
    type: ADD_CLASS,
    className,
    source,
    note
});