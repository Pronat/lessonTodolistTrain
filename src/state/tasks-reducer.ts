import {TasksStateType} from "../App";
import {v1} from "uuid";


type ActionsType = RemoveTaskAT | AddTaskAT
type RemoveTaskAT = ReturnType<typeof removeTaskAC>
type AddTaskAT = ReturnType<typeof addTaskAC>
export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch(action.type) {
        case 'REMOVE-TASK':
            return {
                ...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(el=>el.id !== action.payload.taskId)
            }
        case "ADD-TASK":
            let newTask = {id: v1(), title: action.payload.newTitle, isDone: false}
            return {
                ...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]
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
export const addTaskAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'ADD-TASK', payload: {todolistId, newTitle}
    } as const
}