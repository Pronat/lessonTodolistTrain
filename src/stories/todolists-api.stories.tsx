import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistsApi} from "../api/todolists-api";

export default {
    title: 'API'
}

const settings = {
    withCredentials: true,
    headers: {
        "API-KEY": "79352066-7263-4742-bb95-6ef08001893f"
    }
}



export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке

        todolistsApi.getTodolists()
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        todolistsApi.createTodolist("lalala todolist")
            .then((res) => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "be9fa3a0-1c3e-46bf-a00e-3da7bd62e82f"
        todolistsApi.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            })

    }, [])


    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "2ba99110-b240-4844-9154-56da4765c8b0"
        todolistsApi.updateTodolist(todolistId, "UffffAA")
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        const todolistId = "2ba99110-b240-4844-9154-56da4765c8b0"
        todolistsApi.getTasks(todolistId)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "2ba99110-b240-4844-9154-56da4765c8b0"
        let title = "NewTitle"
        todolistsApi.createTask(todolistId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "2ba99110-b240-4844-9154-56da4765c8b0"
        let taskId = '7a8c78e0-4aa0-4c79-8c8d-9bdd4b16137c'
        todolistsApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = "2ba99110-b240-4844-9154-56da4765c8b0"
        let taskId = '60d39949-4ada-4164-96d7-b053b38984ad'
        let title = "ChangedTitle"
        todolistsApi.updateTask(todolistId, taskId, title)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}