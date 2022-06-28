import {FilterValuesType, TodolistType} from "../App";

type StateType = {
    id: string
    title: string
    filter: FilterValuesType
}

type ActionType = RemoveTodolistACType | RemoveTodolistACType

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(el => el.id !== action.payload.todolistId1);
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
    }
}