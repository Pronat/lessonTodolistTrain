import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type RemoveTodolistAT = {
    type: 'REMOVE-TODOLIST'
    id: string
}
type AddTodolistAT = {
    type: 'ADD-TODOLIST'
    title: string
}
type ChangeTodolistTitleAT = {
    type: 'CHANGE-TODOLIST-TITLE'
    id: string
    title: string
}

type ChangeTodolistFilterAT = {
    type: "CHANGE-TODOLIST-FILTER"
    id: string
    filter: FilterValuesType
}

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