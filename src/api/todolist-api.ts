import axios from "axios";

let settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
}
export const todolistApi = {
    getTodolists() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
    },
     createTodolists(title: string) {
        return axios.put('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
    },

}