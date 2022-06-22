import {TodolistType} from "../App";


type ActionType = {
  type: string
    [key:string]:any
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST' : {
            return state.filter(el => el.id != action.id)
        }
            default:
                throw new Error(`wrong action type`)

    }
}