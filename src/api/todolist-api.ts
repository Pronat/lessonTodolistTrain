import axios from "axios";

type TodolistType = {
    id: string;
    title: string;
    addedDate: string;
    order: number;
}

export type CreateType = {
	data: { item:  TodolistType }
	messages: string[];
	fieldsErrors: string[];
	resultCode: number;
}

export type UpdateDeleteType = {
	data: {};
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
}

export type CommonType<D = {}> = {
    data: D
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
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
        return instance.get<CommonType<{item: TodolistType}>>('todo-lists')
    },
     createTodolist(title: string) {
        return instance.post<CommonType>('todo-lists', {title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<CommonType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<CommonType>(`todo-lists/${todolistId}`, {title})
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