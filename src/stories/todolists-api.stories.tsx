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
       TodoApi.createTodo(title)
        .then( (res) => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = "fd7f1927-5173-4bb8-a923-19af19e9ab2f"
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
        let todolistId = 'fd7f1927-5173-4bb8-a923-19af19e9ab2f'
        let title = "XXXxxx"
        TodoApi.updateTodo(todolistId, title)
        .then( (res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
