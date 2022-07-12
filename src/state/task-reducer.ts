import {TasksStateType} from "../App";

type RemoveTaskACType = {
    type: "REMOVE-TASK"
    todolistId: string
    taskId: string
}

type ActionType = RemoveTaskACType

export const taskReducer = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const copyState = {...state}
            const tasks = state[action.todolistId]
            copyState[action.todolistId] = tasks.filter(el => el.id !== action.taskId)
        }
    }
}

export const removeTaskAC = (todolistId: string, taskId: string): RemoveTaskACType => {
    return {
        type: "REMOVE-TASK", todolistId: todolistId, taskId
    }
}