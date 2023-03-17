import React from 'react';
import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TasksReducer = (state: TaskType[], action: ActionsType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK': {
          return state.filter(el=>el.id !== action.payload.id)
        }
        case 'ADD-TASK': {
            return [
                { id: v1(), title: action.payload.title, isDone: false }, ...state
            ]
        }
        default: return state
    }
};

type ActionsType = RemoveTaskAT | AddTaskAT
type RemoveTaskAT = ReturnType<typeof removeTaskAC>
type AddTaskAT = ReturnType<typeof addTaskAC>
export const removeTaskAC = (id: string) => {
    return{
        type: 'REMOVE-TASK',
        payload: {
            id
        }
    } as const
}

export const addTaskAC = (title: string) => {
    return {
        type: "ADD-TASK",
        payload: {
            title
        }
    } as const
}
