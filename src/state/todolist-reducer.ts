import {TodolistType} from "../App";
import {v1} from "uuid";

type StateType = Array<TodolistType>

type ActionType = RemoveTodolistAT | AddTodolistAT | ChangeTodolistTitleAT | ChangeTodolistFilterAT

type RemoveTodolistAT = ReturnType<typeof RemoveTodolistAC>
type AddTodolistAT = ReturnType<typeof AddTodolistAC>
type ChangeTodolistTitleAT = ReturnType<typeof ChangeTodolistTitleAC>
type ChangeTodolistFilterAT = ReturnType<typeof ChangeTodolistFilterAC>



export const todolistsReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id !== action.id)
        case 'ADD-TODOLIST':
            let newState = {id: v1(), title: action.title, filter: "all"}
            return [...state, newState]
        case 'CHANGE-TODOLIST-TITLE':
           let newwState = [...state]
            let newState2 = newwState.map(el => el.id === action.id ? {...el, title: action.title}: el)
                return newState2
        case 'CHANGE-TODOLIST-FILTER':
            return state.map(el => el.id === action.id ? {...el, filter: action.filter}: el)
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

export const ChangeTodolistFilterAC = (todolistId: string, newFilter: TodolistType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER', id: todolistId, filter: newFilter
    }as const
}
export const ChangeTodolistTitleAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE', id: todolistId, title: newTitle
    }as const
}
