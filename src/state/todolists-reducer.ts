import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type StateType = {
    id: string
    title: string
    filter: FilterValuesType
}

type ActionType = RemoveTodolistACType | AddTodolistACType | ChangeTodolistACType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            // return state.filter(el => el.id !== action.payload.todolistId1);
            return state.filter(el => el.id !== action.payload.todolistId1)
        }
        case "ADD-TODOLIST": {
            const newTodolist = {id: action.payload.id, title: action.payload.title, filter: "all"}
            return [
                ...state,
                newTodolist
            ]
        }
        case 'CHANGE-TODOLIST-TITLE': {
            const todolist = state.find(el => el.id === action.payload.id)
            if (todolist) {
                todolist.title = action.payload.newTitle
            }
            return [
                ...state,

            ]
        }
        default:
            throw new Error(`Invalid type`)
    }
}

type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId1
        }
    } as const
}

type AddTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (id: string, title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            id, title
        }
    } as const
}

type ChangeTodolistACType = ReturnType<typeof changeTodolistAC>
export const changeTodolistAC = (id: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id, newTitle
        }
    }
}