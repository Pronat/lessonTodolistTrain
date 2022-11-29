import {TasksStateType} from "../App";

export type ActionsType = RemoveTaskActionType | ChangeTaskStatusActionType
type RemoveTaskActionType = ReturnType<typeof removeTaskAC>
type ChangeTaskStatusActionType = ReturnType<typeof changeTaskStatusAC>


export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
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
    }   as const
}

export const changeTaskStatusAC = (todolistId: string, taskId: string, isDone: boolean) => {
    return {
        type: "CHANGE-TASK-STATUS", todolistId, taskId, isDone
    }
}