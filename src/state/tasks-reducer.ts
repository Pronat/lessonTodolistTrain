import {FilterValuesType, TasksStateType, TodolistType} from '../App';
import {v1} from 'uuid';
import {AddTodolistActionType} from "./todolists-reducer";

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

export type ChangeTaskStatusACType = {
    type: "CHANGE-TASK-STATUS",
    todolistId: string,
    taskId: string
    taskIsDone: boolean
}

export type ChangeTaskTitleACType = {
    type: "CHANGE-TASK-TITLE"
    todolistId: string,
    taskId: string,
    taskTitle: string
}


type ActionsType = RemoveTaskActionType | AddTaskACType | ChangeTaskStatusACType
    | ChangeTaskTitleACType | AddTodolistActionType

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
        case "CHANGE-TASK-STATUS": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const task = tasks.find(el => el.id === action.taskId)
            if (task) {
                task.isDone = action.taskIsDone
            }
            stateCopy[action.todolistId] = tasks
            return stateCopy
        }
        case "CHANGE-TASK-TITLE": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            const newTitle = tasks.find(el => el.id === action.taskId)
            if (newTitle) {
                newTitle.title = action.taskTitle
            }
            stateCopy[action.todolistId] = tasks
        }
        case 'ADD-TODOLIST': {
            let stateCopy = {...state}
            stateCopy[v1()] = []
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

export const changeTaskStatusAC = (todolistId: string, taskId: string, taskIsDone: boolean): ChangeTaskStatusACType => {
    return {
        type: "CHANGE-TASK-STATUS", todolistId: todolistId, taskId: taskId, taskIsDone: taskIsDone
    }
}

export const changeTaskTitleAC = (todolistId: string, taskId: string, taskTitle: string): ChangeTaskTitleACType => {
    return {
        type: "CHANGE-TASK-TITLE", todolistId, taskId, taskTitle
    }
}