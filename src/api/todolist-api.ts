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
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists/', settings)
    },
    createTodolist(title: string) {
        return axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists/', {title: title}, settings)
    },
    deleteTodolist(todolistId: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
    },
    updateTodolist(todolistId: string, title: string) {
        return axios.put(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            {title: title},
            settings
        )
    },

}
