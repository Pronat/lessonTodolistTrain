import {TodolistType} from "../App";
import {v1} from "uuid";

type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = ReturnType<typeof removeTodolistAC> | ReturnType<typeof addTodolistAC>

// меня вызовут и дадут мне стейт (почти всегда объект)
// и инструкцию (action, тоже объект)
// согласно прописанному type в этом action (инструкции) я поменяю state
export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el=>el.id !== action.payload.todolistId)
        case "ADD-TODOLIST": {
            let newElement: TodolistType = {id: v1(), title: action.payload.newTodolistTitle, filter: "all"}
            return [...state, newElement]
        }
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
