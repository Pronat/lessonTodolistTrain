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



const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
}

export const todolistsApi = {
    getTodolists() {
        let promise = axios.get<Array<TodolistType>>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    createTodolist(title: string) {
        let promise = axios.post<CreateTodolistResponseType>("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: title}, settings)
        return promise
    },
    deleteTodolist(todolistId: string) {
        let promise = axios.delete<DeleteTodolist>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        let promise = axios.put<UpdateTodolist>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title: title}, settings)
        return promise
    }

}
