import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType =
    ReturnType<typeof removeTodolistAC> |
    ReturnType<typeof addTodolistAC> |
    ReturnType<typeof changeTodolistTitle> |
    ReturnType<typeof changeTodolistFilter>

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state
export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el=>el.id !== action.payload.todolistId)
        case "ADD-TODOLIST": {
            let newTodolist: TodolistType = {id: v1(), title: action.payload.newTodolistTitle, filter: "all"}
            return [...state, newTodolist]
        }
        case "CHANGE-TODOLIST-TITLE":
            return state.map(el=> el.id === action.payload.todolistId ? {...el, title: action.payload.newTodolistTitle}: el )
        case "CHANGE-TODOLIST-FILTER":
            return state.map(el => el.id === action.payload.todolistId ? {...el, filter: action.payload.newFilter} : el)
        default:
            throw new Error('I don\'t understand this type')
    }
}

export const removeTodolistAC = (todolistId: string) => {
    return {
        type: 'REMOVE-TODOLIST', payload: {todolistId}
    } as const
}

export const addTodolistAC = (newTodolistTitle: string) => {
    return {
        type: 'ADD-TODOLIST', payload: {newTodolistTitle}
    } as const
}
export const changeTodolistTitle = (todolistId: string, newTodolistTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE', payload: {todolistId, newTodolistTitle}
            } as const
}

export const changeTodolistFilter = (todolistId: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILTER', payload: {todolistId, newFilter}
    }   as const
}