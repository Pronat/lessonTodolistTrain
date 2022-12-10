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
    deleteTodolist<DeleteUpdateTodolistResponseType>(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    updateTodolist<DeleteUpdateTodolistResponseType>(todolistId: string, title: string) {
        return instance.put(
            `todo-lists/${todolistId}`,
            {title: title}
        )
    },

}

type DeleteUpdateTodolistResponseType = {
    resultCode: number
    messages: string,
    data: Array<string>
}

type CreateTodolistResponseType = {
    resultCode: number
    messages: [],
    data: {
        item:   {
            id: string,
            title: string,
            addedDate: string,
            order: number
}}}

type TodolistType = {
    id: string
    addedDate: string
    order: number
    title: string
}
