import {TasksStateType} from "../App";

type ActionsType = RemoveTaskActionType | AddTaskActionType
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
type AddTaskActionType = ReturnType<typeof addTaskAC>

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].filter(el => el.id !== action.taskId)
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

export const addTaskAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'ADD-TASK', todolistId, newTitle
    }
}