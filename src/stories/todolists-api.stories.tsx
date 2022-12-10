import React, {useEffect, useState} from 'react'
import axios from "axios";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '79352066-7263-4742-bb95-6ef08001893f'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        promise.then((res) => {
            setState(res.data)
        })
            .catch((e) => {
                console.log(e)
            })
            .finally(() => {
            })
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const data = {title: 'NewTitle123'}
        const promise = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', data, settings)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '800cca96-7380-4ee5-8f65-b3081036b9ca'
        axios.delete('https://social-network.samuraijs.com/api/1.1/todo-lists/$todolistId', settings)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

