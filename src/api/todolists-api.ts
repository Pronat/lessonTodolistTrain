import axios from "axios";
import {CreateTodolist, DeleteTodolist, UpdateTodolistTitle} from "../stories/todolists-api.stories";

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
}

export const todolistsApi = {
    getTodolists() {
        let promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    createTodolist() {
        let promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: "ASDerek"}, settings)
        return promise
    },
    deleteTodolist() {
        let todolistId = "f0ae979c-5c2a-4775-ae12-555e13d1a581"
        let promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    },
    updateTodolistTitle() {
        let todolistId = "028b2df6-7fad-4388-8c30-1d4d8a2491e7"
        let promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists${todolistId}`,
            {title: "RareTitle"}, settings)
        return promise
    }

}
