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
        return instance.post<CreateTodolistResponseType>('todo-lists/', {title: title})
    },
    deleteTodolist<DeleteTodolistResponseType>(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    updateTodolist<UpdateTodolistResponseType>(todolistId: string, title: string) {
        return instance.put(
            `todo-lists/${todolistId}`,
            {title: title}
        )
    },

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


type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
