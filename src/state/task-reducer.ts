import {TasksStateType} from "../App";
import {v1} from "uuid";
import {AddTodolistActionType} from "./todolists-reducer";

type StateType = TasksStateType
type ActionType = RemoveTaskAT | AddTaskAT | ChangeTaskTitleAT | ChangeTaskStatusAT | AddTodolistActionType

type RemoveTaskAT = ReturnType<typeof RemoveTaskAC>

type AddTaskAT = ReturnType<typeof AddTaskAC>

type ChangeTaskTitleAT = ReturnType<typeof ChangeTaskTitleAC>

type ChangeTaskStatusAT = ReturnType<typeof ChangeTaskStatusAC>

export const taskReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {
                ...state,
                [action.todolistId]: [...state[action.todolistId].filter(el => el.id !== action.taskId)]
            }
            // let tasks = state[action.todolistId]
            // state[action.todolistId] = tasks.filter(el => el.id !== action.taskId)
            // return {...state}
        case 'ADD-TASK':
            let newTask = {id: v1(), title: action.newTitle, isDone: false}
            return {
                ...state,
                [action.todolistId]: [...state[action.todolistId], newTask ]
            }
            // let newTask = {id: v1(), title: action.newTitle, isDone: false}
            // return {...state, newTask}
        case "CHANGE-TASK-TITLE":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {...el, title: action.newTitle}: el)
            }
        case 'ADD-TODOLIST':
            return {
                ...state,
                [v1()]: []
            }
            // let tasks = state[action.todolistId]
            // let task = tasks.find(el => el.id === action.taskId)
            // if (task) {
            //     task.title = action.newTitle
            // }
            // return {...state}
        case "CHANGE-TASK-STATUS":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskId ? {...el, isDone: action.newIsDone}: el)
            }
        default:
            throw new Error("I don't understand this type")
    }
}

export const RemoveTaskAC = (todolistId: string, taskId: string) => {
    return {
        type: 'REMOVE-TASK', todolistId: todolistId, taskId: taskId
    }as const
}

export const AddTaskAC = (todolistId: string, newTitle: string) => {
    return {
        type: 'ADD-TASK', todolistId: todolistId, newTitle
    }as const
}

export const ChangeTaskTitleAC = (todolistId: string, taskId: string, newTitle: string) => {
    return {
        type: 'CHANGE-TASK-TITLE', todolistId, taskId, newTitle
    } as const
}

export const ChangeTaskStatusAC = (todolistId: string, taskId: string, newIsDone: boolean) => {
    return {
        type: 'CHANGE-TASK-STATUS', todolistId, taskId: taskId, newIsDone: newIsDone
    } as const
}