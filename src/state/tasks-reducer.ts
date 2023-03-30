import {TasksStateType} from "../App";
import {Dispatch} from "react";

type ActionsType = any
export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch(action.type) {
        case 'XXX':
            return state
        default:
            return state
    }
}