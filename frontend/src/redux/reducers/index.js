import { combineReducers } from "redux";

import { notesReducer } from "./notesReducer";
export const reducers = combineReducers({
    allNotes:notesReducer
})