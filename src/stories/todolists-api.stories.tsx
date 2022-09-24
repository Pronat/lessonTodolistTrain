import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

let settings = {
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
        todolistApi.getTodolists()
        .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "NewTitle"
       todolistApi.createTodolist(title)
        .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = 'a5f86d99-04c5-4191-b41d-467c14661952'
        todolistApi.deleteTodolist(todolistId)
        .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = 'a5f86d99-04c5-4191-b41d-467c14661952'
        let title = "QQQQQQ"
        todolistApi.updateTodolist(todolistId, title)
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
        let todolistId = 'dd13c614-6600-4b2b-bff5-3a26c682e799'
        todolistApi.getTasks(todolistId)

        .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let title = "Ogogogog"
        let todolistId = 'dd13c614-6600-4b2b-bff5-3a26c682e799'
       todolistApi.createTask(todolistId, title)
        .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '19c6ecc0-318f-450b-8cb9-e55fdc300219'
        let taskId = '76eb3beb-4e62-4c8f-b611-819253a73e71'
        todolistApi.deleteTasks(todolistId, taskId)
        .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}


export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        let todolistId = '8db9495a-0f67-4193-9bfe-aa2670e5f290'
        let taskId = '76eb3beb-4e62-4c8f-b611-819253a73e71'
        let title = "PutTaskTitle"
        todolistApi.deleteTasks(todolistId, taskId)
        .then((res) => {
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
