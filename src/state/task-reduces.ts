import {TasksStateType} from "../App";
import {v1} from "uuid";

export type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export type AddTaskActionType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleActionType = ReturnType<typeof changeTaskTitleAC>


type ActionType = RemoveTaskActionType | AddTaskActionType
    | ChangeTaskStatusActionType | ChangeTaskTitleActionType

export const taskReduces = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)
            }
        }

        case "ADD-TASK": {
            const newTask = {id: v1(), title: action.taskTitle, isDone: false}
            return {
                ...state,
                [action.todolistId]:[newTask, ...state[action.todolistId]]
            }
        }
        case "CHANGE-TASK-STATUS": {
           return {
               ...state,
               [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {...el, isDone: action.taskIsDone}: el)
           }
        }
        case "CHANGE-TASK-TITLE": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {...el, title: action.taskTitle}: el)
            }
        }

        default: {
            return {...state}
        }
    }
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
    return {
        type: "REMOVE-TASK", taskId: taskId, todolistId: todolistId,
    } as const
}
export const addTaskAC = (taskTitle: string, todolistId: string) => {
    return {
        type: "ADD-TASK", todolistId: todolistId, taskTitle
    } as const
}
export const changeTaskStatusAC = (taskId: string, taskIsDone: boolean, todolistId: string) => ({
        type: "CHANGE-TASK-STATUS",taskId, taskIsDone: taskIsDone, todolistId
    } as const
)
export const changeTaskTitleAC = (taskId: string, taskTitle: string, todolistId: string) => ({
    type: "CHANGE-TASK-TITLE", taskId: taskId, taskTitle: taskTitle, todolistId
    } as const
)