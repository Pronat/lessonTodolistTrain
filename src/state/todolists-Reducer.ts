import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type RemoveTodolistAT = ReturnType<typeof RemoveTodolistAC>

type AddTodolistAT = ReturnType<typeof AddTodolistAC>

type ChangeTodolistTitleAT = ReturnType<typeof ChangeTodolistTitleAC>

type ChangeTodolistFilterAT = ReturnType<typeof ChangeTodolistFilterAC>

type ActionType = RemoveTodolistAT | AddTodolistAT | ChangeTodolistTitleAT | ChangeTodolistFilterAT

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            let newTodolists = [...state]
            newTodolists = newTodolists.filter(el => el.id !== action.id)
            return newTodolists
        case "ADD-TODOLIST":
            let newTodolists2 = [...state]
            let newTodolist2 = {id: v1(), title: action.title, filter: "all"}
            return [...newTodolists2, newTodolist2]
        case 'CHANGE-TODOLIST-TITLE':
            let copyTodolists = [...state]
            copyTodolists = copyTodolists.map(el => el.id === action.id ? {...el, title: action.title} : el)
            return copyTodolists
        case 'CHANGE-TODOLIST-FILTER':
            let copyTodolists3 = [...state]
            let copyTodolists4 = copyTodolists3.map(el => el.id === action.id ? {...el, filter: action.filter} : el)
            return copyTodolists4

        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTodolistAC = (todolistId: string) => {
    return {type: 'REMOVE-TODOLIST', id: todolistId} as const
}

export const AddTodolistAC = (newTodolistTitle: string) => {
    return {
        type: "ADD-TODOLIST", title: newTodolistTitle
    } as const
}

export const ChangeTodolistTitleAC = (todolistId: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE', id: todolistId, title: newTodolistTitle
    } as const
}

export const ChangeTodolistFilterAC = (todolistId: string, newFilter: FilterValuesType) => {
   return {
       type: 'CHANGE-TODOLIST-FILTER', id: todolistId, filter: newFilter
} as const
    }