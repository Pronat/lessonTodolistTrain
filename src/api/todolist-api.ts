import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '79352066-7263-4742-bb95-6ef08001893f',
    },
})

export const todolistAPI = {
    getTodolists() {
        return instance.get<Array<TodolistType>>('todo-lists/')
    },
    createTodolist(title: string) {
        return instance.post<ResponseType<{ item: TodolistType }>>('todo-lists/', {title: title})
    },
    deleteTodolist(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTodolist(todolistId: string, title: string) {
        return instance.put<ResponseType>(
            `todo-lists/${todolistId}`,
            {title: title}
        )
    },
    getTasks(todolistId: string) {
        return instance.get<GetTasksType>(`todo-lists/${todolistId}/tasks`)
    },
    createTasks(todolistId: string, title: string) {
        return instance.post<CreateTasksType>(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTasks(todolistId: string) {
        return instance.delete<ResponseType>(`todo-lists/${todolistId}`)
    },
    updateTasks(todolistId: string, title: string) {
        return instance.put<ResponseType>(
            `todo-lists/${todolistId}`,
            {title: title}
        )
    },

}


type GetTasksType = {
    Items: {
        description: string
        title: string
        completed: boolean
        status: number
        priority: number
        startDate: null
        deadline: null
        id: string
        todoListId: string
        order: number
        addedDate: string
    }
}
type CreateTasksType = {
    data: {
        Items: {
            description: string
            title: string
            completed: boolean
            status: number
            priority: number
            startDate: null
            deadline: null
            id: string
            todoListId: string
            order: number
            addedDate: string
        }
    }
    resultCode: number
    messages: []

}


type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}

type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {}
}


type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: {
        item: TodolistType
    }
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
