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
        const todolistId = '01b4e9ef-21e8-4076-b076-0b116b5fe3a4'
        todolistAPI.updateTodolist(todolistId, "NewNewTitle")
            .then( (res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '0504abe2-a946-42f7-a56c-a7d9ab14df00'
        todolistAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "We made title"
        const todolistId = '0504abe2-a946-42f7-a56c-a7d9ab14df00'
        todolistAPI.createTasks(todolistId, title)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

    }, [])
    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "We updated title2"
        const todolistId = '0504abe2-a946-42f7-a56c-a7d9ab14df00'
        const taskId = 'aede60bb-4bcb-497a-9c4c-8552cd11df51'
        todolistAPI.updateTasks(todolistId, taskId, title)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}

