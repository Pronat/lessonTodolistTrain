import {TasksStateType} from "../App";

export type ActionsType = RemoveTaskActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...state,

            }
        default:
            return state
    }
}

type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'REMOVE-TASK', todolistId, taskId
    }   as const
}