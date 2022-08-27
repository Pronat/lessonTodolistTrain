import {TasksStateType} from "../App";

type StateType = TasksStateType
type ActionType = RemoveTaskAT

type RemoveTaskAT = ReturnType<typeof RemoveTaskAC>

export const taskReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return state[action.todolistId].filter(el => el.id !== action.taskId)
        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'REMOVE-TASK', todolistId: todolistId, taskId: taskId
    }as const
}

export const SomeAC2 = (id: string) => {
    return {
        type: '', id: id
    }as const
}