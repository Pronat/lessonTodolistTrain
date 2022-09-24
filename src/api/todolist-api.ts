import axios from "axios";

let settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
}

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
        'API-KEY': "79352066-7263-4742-bb95-6ef08001893f"
    }
})
export const todolistApi = {
    getTodolists() {
        return instance.get('todo-lists')
    },
     createTodolist(title: string) {
        return instance.post('todo-lists', {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}`, {title})
    },

    getTasks(todolistId: string) {
        return instance.get(`todo-lists/${todolistId}/tasks/`)
    },

    createTask(todolistId: string, title: string) {
        return instance.post(`todo-lists/${todolistId}/tasks/`, {title})
    },
    deleteTasks(todolistId: string, taskId: string) {
        return instance.delete(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTasks(todolistId: string, taskId: string, title: string) {
        return instance.put(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    },

}