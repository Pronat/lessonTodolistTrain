import axios from "axios";


export type TodoType = {
	id: string;
	title: string;
	addedDate: string;
	order: number;
}

export type CreateTodo = {
	messages: string[];
	fieldsErrors: string[];
	resultCode: number;
    data: {
        item: TodoType
    }
}

export type DeleteUpdateType = {
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
    data: {}
}

export type CommonResponseType<T = {}> = {
    messages: string[];
    fieldsErrors: string[];
    resultCode: number;
    data: T
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
        return instance.get<TodoType[]>('todo-lists')
    },
    deleteTodo(todolistId: string) {
        return instance.delete<CommonResponseType>(`todo-lists/${todolistId}`)
    },
    createTodo(title: string) {
        return instance.post<CommonResponseType<{item: TodoType}>>(`todo-lists/`, {title})
    },
    updateTodo(todolistId: string, title: string) {
        return instance.put<CommonResponseType>(`todo-lists/${todolistId}`, {title})
    }
}