import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.1/",
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
})











// const settings = {
//     withCredentials: true,
//     headers: {
//         'API-KEY': '79352066-7263-4742-bb95-6ef08001893f'
//     }
// }

export const TodoApi = {
    getTodo() {
        return instance.get('todo-lists')
    },
    deleteTodo(todolistId: string) {
        return instance.delete(`todo-lists/${todolistId}`)
    },
    createTodo(title: string) {
        let promise = axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists/`, {title}, settings)
        return promise
    },
    updateTodo(todolistId: string, title: string) {
        let promise = axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, {title}, settings)
        return promise
    }


}