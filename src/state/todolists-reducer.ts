import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type StateType = {
    id: string
    title: string
    filter: FilterValuesType
}

type ActionType = RemoveTodolistACType | AddTodolistACType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todolistId1);
        }
        case 'ADD-TODOLIST':
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
const addTodolistAC = (id: string, title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            id, title
        }
    }
}