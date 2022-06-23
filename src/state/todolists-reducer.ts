import {TodolistType} from "../App";
import {v1} from "uuid";


type ActionType = {
  type: string
    [key:string]:any
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id != action.id)
        }
        case 'ADD-TODOLIST': {
            return [
                ...state,
                {id: v1(), title: action.title, filter: "all"}
            ]
        }
        case "CHANGE-TODOLIST-TITLE": {
            const todolist = state.find(el => el.id === action.id)
            if (todolist) {
                todolist.title = action.title
            }
            return [
                ...state
            ]
        }

        default:
            throw new Error(`Invalid action`)

    }
}