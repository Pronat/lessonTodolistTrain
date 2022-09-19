import axios from "axios";

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
    }
}