import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";

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
       todolistAPI.getTodolists()
        .then((res) => {
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
       todolistAPI.createTodolist("NewswswTitle")
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '76e98a61-6509-41f6-89be-4623fb4956fc'
        todolistAPI.deleteTodolist(todolistId)
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const data = {title: "UpdatedTitle"}
        const todolistId = '76e98a61-6509-41f6-89be-4623fb4956fc'
        todolistAPI.updateTodolist(todolistId, "NewNewTitle")
            .then( (res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

