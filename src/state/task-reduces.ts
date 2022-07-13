import {TasksStateType} from "../App";
import {v1} from "uuid";

type RemoveTaskACType = ReturnType<typeof removeTaskAC>
type AddTaskACType = ReturnType<typeof addTaskAC>


type ActionType = RemoveTaskACType | AddTaskACType

export const taskReduces = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(el=>el.id !== action.todolistId)
            }
        }
        case "ADD-TASK": {
            const newTask = {id: v1(), title: "juice", isDone: false}
            return {
                ...state,
                [action.todolistId]: {...state[action.todolistId], newTask}
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
