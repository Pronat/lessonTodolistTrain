import {TasksStateType} from "../App";

type RemoveTaskACType = {
    type: "REMOVE-TASK"
    todolistId: string
    taskId: string
}

type ActionType = RemoveTaskACType

export const taskReduces = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            const stateCopy = {...state}
            const tasks = state[action.todolistId]
            stateCopy[action.todolistId] = tasks.filter(el => el.id !== action.taskId)
            return stateCopy
        }
    }
}

export const removeTaskAC = (todolistId: string, taskId: string): RemoveTaskACType => {
    return {
        type: "REMOVE-TASK", todolistId: todolistId, taskId
    }
}