import axios from "axios";
import {CreateTodolist, DeleteTodolist, UpdateTodolistTitle} from "../stories/todolists-api.stories";

export type TodolistType = {
    id: string
    title: string
    addedDate: string
    order: number
}
type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        item: TodolistType
    }
}

type DeleteTodolist = {
    resultCode: number
    messages: string[]
        data: {}
}

type UpdateTodolist = {
    resultCode: number
    messages: string[]
    data: {}
}

type ResponseType<D> = {
    resultCode: number
    messages: string[]
    data: D
}

export type TaskType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}

type GetTasksResponce = {
    error: string | null
    totalCount: number
    items: TaskType[]
}




const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
}

const instance = axios.create( {
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    ...settings
})

export const todolistsApi = {
    getTodolists() {
        let promise = instance.get<Array<TodolistType>>("todo-lists")
        return promise
    },
    createTodolist(title: string) {
        let promise = instance.post<ResponseType<{item: TodolistType}>>("todo-lists", {title: title})
        return promise
    },
    deleteTodolist(todolistId: string) {
        let promise = instance.delete<ResponseType<{}>>(`todo-lists/${todolistId}`)
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        let promise = instance.put<ResponseType<{}>>(`todo-lists/${todolistId}`, {title: title})
        return promise
    },

    getTasks(todolistId: string) {
        let promise = instance.get<GetTasksResponce>(`todo-lists/${todolistId}/tasks`)
        return promise
    }

}
