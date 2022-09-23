import axios from "axios";

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '79352066-7263-4742-bb95-6ef08001893f'
    }
}

export const TodoApi = {
    getTodo() {
        let promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
        return promise
    },
    createTodo(todolistId: string, title: string) {
        let promise = axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
        return promise
    },
    deleteTodo() {

    },
    updateTodo() {

    }


}