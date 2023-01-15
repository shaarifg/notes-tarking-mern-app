import { ACTIONS } from "../constants/types"

export const addNote =(data)=>{
    return{
        type:ACTIONS.ADD_NOTE,
        payload:data
    }
}

export const deleteNote =(data)=>{
    return{
        type:ACTIONS.DELETE_NOTE,
        payload:data
    }
}