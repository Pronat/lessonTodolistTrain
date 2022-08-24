import {TodolistType} from "../App";

type StateType = Array<TodolistType>

type ActionType = RemoveTodolistAT

type RemoveTodolistAT = ReturnType<typeof RemoveTodolistAC>



export const todolistsReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
           let newTodolist = [...state]
            newTodolist = newTodolist.filter(el => el.id !== action.id)
            return newTodolist
        default:
            throw new Error("I do not understand this type")
    }
}



export const RemoveTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST', id: todolistId1
    }as const
}