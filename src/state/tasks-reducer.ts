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
    title: string,
}

export type changeStatusACType = {
    type: "CHANGE-STATUS",
    todolistId: string,
    taskId: string
    taskIsDone: boolean
}


type ActionsType = RemoveTaskActionType | AddTaskACType | changeStatusACType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK": {
            let stateCopy = {...state}
            const tasks = state[action.todolistId]
            const filteredTasks = tasks.filter(el => el.id !== action.taskId)
            stateCopy[action.todolistId] = filteredTasks
            return stateCopy
        }
        case "ADD-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const newTask = {id: v1(), title: action.title, isDone: false}
            const newTasks = [newTask, ...tasks]
            stateCopy[action.todolistId] = newTasks
            return stateCopy
        }
        case "CHANGE-STATUS": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const task = tasks.find(el => el.id === action.taskId)
            if (task) {
                task.isDone = action.taskIsDone
            }
            return stateCopy
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

export const addTaskAC = (todolistId: string, title: string): AddTaskACType => {
    return {
        type: "ADD-TASK", todolistId: todolistId, title: title
    }
}

export const changeStatusAC = (todolistId: string, taskId: string, taskIsDone: boolean) => {
    return {
        type: "CHANGE-STATUS", todolistId: todolistId, taskId: taskId, taskIsDone: taskIsDone
    }
}