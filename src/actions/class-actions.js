export const ADD_CLASS = "add-class";

export const addNewClass = (className, source, note) => ({
    type: ADD_CLASS,
    className,
    source,
    note
});