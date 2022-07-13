import {TasksStateType} from "../App";
import {v1} from "uuid";

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export type AddTaskACType = ReturnType<typeof addTaskAC>


type ActionType = RemoveTaskACType | AddTaskACType

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
