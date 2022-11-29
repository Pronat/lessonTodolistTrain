import {TasksStateType} from "../App";

export type ActionsType = RemoveTaskActionType


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
         let tasksForTodolists = {...state}
            let tasks = tasksForTodolists[action.todolistId]
            let filteredTasks = tasks.filter(el => el.id !== action.taskId)
            tasksForTodolists[action.todolistId] = filteredTasks
            return tasksForTodolists
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