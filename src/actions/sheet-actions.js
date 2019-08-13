import {shortid} from "../reducers/SheetApp";

export const DELETE_ID = "delete-id";

export const deleteId = (id) => ({
    _id: shortid.generate(),
    type: DELETE_ID,
    id
});