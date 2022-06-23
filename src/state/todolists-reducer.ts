import {TodolistType} from "../App";
import {v1} from "uuid";


type ActionsType = RemoveTodolistActionType | AddTodolistActionType | ChangeTodolistTitleActionType | ChangeTodolistFilterActionType

export type RemoveTodolistActionType = {
    type: "REMOVE-TODOLIST"
    id: string
}
export type AddTodolistActionType = {
    type: "ADD-TODOLIST"
    title: string
}
export type ChangeTodolistTitleActionType = {
    type: "CHANGE-TODOLIST-TITLE"
    id: string
    title: string
}
export type ChangeTodolistFilterActionType = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string
    title: string
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionsType): Array<TodolistType> => {
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
        case "CHANGE-TODOLIST-FILTER": {
            const todolist = state.find(el => el.id === action.id)
            if (todolist) {
                todolist.filter = action.filter
            }
            return [
                ...state
            ]
        }

        default:
            throw new Error(`Invalid action`)

    }
}