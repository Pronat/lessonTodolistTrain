import {TodolistType} from "../App";
import {v1} from "uuid";

type StateType = Array<TodolistType>

type ActionType = RemoveTodolistAT | AddTodolistAT

type RemoveTodolistAT = ReturnType<typeof RemoveTodolistAC>
type AddTodolistAT = ReturnType<typeof AddTodolistAC>



export const todolistsReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.id)
        case 'ADD-TODOLIST':
            let newState = {id: v1(), title: action.title, filter: "all"}
            return [...state, newState]
        default:
            throw new Error("I do not understand this type")
    }
}



export const RemoveTodolistAC = (todolistId1: string) => {
    return {
        type: 'REMOVE-TODOLIST', id: todolistId1
    }as const
}

export const AddTodolistAC = (newTitle: string) => {
    return {
        type: 'ADD-TODOLIST', title: newTitle
    }as const
}