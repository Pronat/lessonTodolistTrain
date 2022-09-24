import axios from "axios";


export type TodoType = {
	id: string;
	title: string;
	addedDate: string;
	order: number;
}


const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1",
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
})

export const TodoApi = {
    getTodo() {
        return instance.get('todo-lists')
    },
    deleteTodo(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    createTodo(title: string) {
        return instance.post(`todo-lists/`, {title})
    },
    updateTodo(todolistId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}`, {title})
    }
}