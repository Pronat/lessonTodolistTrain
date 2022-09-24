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
     createTodolist(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title}, settings)
    },
    deleteTodolist(todolistId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodolist(todolistId: string, title: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
    },

}