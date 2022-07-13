import {TasksStateType} from "../App";

type RemoveTaskACType = {
    type: "REMOVE-TASK"
    taskId: string
    todolistId: string
}

type ActionType = RemoveTaskACType

export const taskReduces = (state: TasksStateType, action: ActionType) => {
    switch (action.type) {
        case "REMOVE-TASK": {
            return {
                ...state,
                [action. todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)
            }
        }
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskACType => {
    return {
        type: "REMOVE-TASK", taskId: taskId, todolistId: todolistId,
    }
}