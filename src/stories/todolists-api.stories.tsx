import React, {useEffect, useState} from 'react'
import axios from "axios";
import {TodoApi} from "../api/todo-api";

export default {
    title: 'API'
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
        let title = "LLllll"
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
        let todolistId = "bdc96fa5-5bd7-4247-8742-4e454f79fa95"
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
        let todolistId = '6e93b03b-9f8d-4513-b1d1-155426e09842'
        let title = "XXXxxx"
        TodoApi.updateTodo(todolistId, title)
        .then( (res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
