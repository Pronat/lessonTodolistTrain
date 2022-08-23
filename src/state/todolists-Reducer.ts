import {TodolistType} from "../App";

type ActionType = {
    type: string;
    [key: string]: any
}

export const todolistsReducer = (state: Array<TodolistType>, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            let newTodolists = [...state]
            newTodolists = newTodolists.filter(el => el.id !== action.id)
            return newTodolists
        default:
            throw new Error("I don't understand this type")
    }
}