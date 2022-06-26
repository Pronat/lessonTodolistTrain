import {FilterValuesType, TodolistType} from "../App";

type StateType = {
    id: string
    title: string
    filter: FilterValuesType
}

type ActionType = {
[key:string]: any
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id != action.id)
        default:
            throw new Error(`Invalid type`)
    }
}

type todolistIdACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId
        }
    } as const
}