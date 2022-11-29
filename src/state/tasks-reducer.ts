import {TasksStateType} from "../App";

export type ActionsType = RemoveTaskActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            let todolistTasks = state[action.todolistId]
            state[action.todolistId] = todolistTasks.filter(el => el.id !== action.taskId)
            return state
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