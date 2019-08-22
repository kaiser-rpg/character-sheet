import {shortid} from "../reducers";

export const DELETE_ID = "delete-id";

export const deleteId = (id) => ({
    _id: shortid.generate(),
    type: DELETE_ID,
    id
});