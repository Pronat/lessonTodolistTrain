import React, {useEffect, useState} from 'react'
import axios from "axios";
import {TodoApi} from "../api/todo-api";

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
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

            TodoApi.getTodo()
            .then( (res)=> [
                setState(res.data)
            ])

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "TraTaTa"
        let promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title}, settings)
        promise.then( (res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = "6120cfdb-9ee1-492c-8fe9-e1ef7ba48f32"
            TodoApi.deleteTodo(todolistId)
        .then( (res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '2d501166-ebc6-47b4-8065-94097ac99c0b'
        let title = "XXXxxx"
        TodoApi.createTodo(todolistId, title)
        .then( (res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
