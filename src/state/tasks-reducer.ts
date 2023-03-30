import {TasksStateType} from "../App";


type ActionsType = RemoveTaskAT
type RemoveTaskAT = ReturnType<typeof removeTaskAC>
export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch(action.type) {
        case 'REMOVE-TASK':
            return {
                ...state, [action.payload.todolistId]: state.filter(el=>el.id !)
            }
        default:
            return state
    }
}

export const removeTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'REMOVE-TASK', payload: {todolistId, taskId}
    } as const
}