import axios from 'axios'

const settings = {
    withCredentials: true,
    headers: {
        // Не забываем заменить API-KEY на собственный
        'API-KEY': '79352066-7263-4742-bb95-6ef08001893f',
    },
}

export const todolistAPI = {
    getTodolists() {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists/', settings)
        return promise
    },
    createTodolist(title: string) {
        const promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists/', {title: title}, settings)
        return promise
    },
    deleteTodolist(todolistId: string) {
        const promise = axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
        return promise
    },
    updateTodolist(todolistId: string, title: string) {
        const promise = axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title: title},
            settings
        )
        return promise
    },

}