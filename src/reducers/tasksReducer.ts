import React from 'react';
import {TaskType} from "../Todolist";

export const TasksReducer = (state: TaskType[], action: ActionsType): TaskType[] => {
    switch (action.type) {
        case 'REMOVE-TASK': {
            return state
        }
        default: return state
    }
};

type ActionsType = RemoveTaskAT
type RemoveTaskAT = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (  ) => {
    return{
        type: 'REMOVE-TASK',
    } as const
}
