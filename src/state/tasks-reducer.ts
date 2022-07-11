import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';

export type RemoveTaskActionType = {
    type: "REMOVE-TASK",
    todolistId: string,
    taskId: string
}
export type AddTaskACType = {
    type: "ADD-TASK",
    todolistId: string,
    taskTitle: string,
}



type ActionsType = RemoveTaskActionType | AddTaskACType

export const tasksReducer = (state:TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(el => el.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy
        }
        case "ADD-TASK": {
            // const newTask = {id: v1(), title: action.taskTitle, isDone: false}
            // let stateCopy = {...state}
            // const tasks = state[action.todolistId]
            // stateCopy[action.todolistId] = [newTask, ...tasks]
            // return stateCopy
            return {...state}
        }
        default: {
            return state
        }
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return {
        type: "REMOVE-TASK", taskId: taskId, todolistId: todolistId
    }
}

export const addTaskAC = (todolistId: string, taskTitle: string): AddTaskACType => {
    return {
        type: "ADD-TASK", todolistId: todolistId, taskTitle: taskTitle
    }
}
