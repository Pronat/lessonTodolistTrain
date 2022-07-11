import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: "REMOVE-TASK",
    todolistId: string,
    taskId: string
}
export type Action2Type = {
    type: '2',
    title: string
}


type ActionsType = RemoveTaskActionType | Action2Type

export const tasksReducer = (state:TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(el => el.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy
        }
        default: {
            return state
        }
    }
}


export const action2AC = (title: string): Action2Type => {
    return {type: '2', title: title}
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {
        type: "REMOVE-TASK", taskId: taskId, todolistId: todolistId
    }
}
