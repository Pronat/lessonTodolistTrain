import {TasksStateType} from "../App";
import {v1} from "uuid";

export type ActionsType = RemoveTaskActionType | ChangeTaskStatusActionType | AddTaskActionType | ChangeTitleActionType
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>
type AddTaskActionType = ReturnType<typeof addTaskAC>
type ChangeTitleActionType = ReturnType<typeof changeTitleAC>


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)
            }
        case "ADD-TASK":
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case "CHANGE-TASK-STATUS":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {...el, isDone: action.isDone}: el)
            }
        case "CHANGE-TASK-TITLE":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId
                    ? {...el, title: action.title}: el)
            }
        default:
            return state
    }
}

export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'REMOVE-TASK', todolistId, taskId
    } as const
}

export const changeTaskStatusAC = (todolistId: string, taskId: string, isDone: boolean) => {
    return {
        type: "CHANGE-TASK-STATUS", todolistId, taskId, isDone
    } as const
}
export const changeTitleAC = (todolistId: string, taskId: string, title: string) => {
    return {
        type: "CHANGE-TASK-TITLE", todolistId, taskId, title
    } as const
}

export const addTaskAC = (todolistId: string, title: string) => {
    return {
        type: "ADD-TASK", todolistId, title
    } as const
}

