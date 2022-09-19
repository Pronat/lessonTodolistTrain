import React, {useEffect, useState} from 'react'
import axios from "axios";

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

    let promise = axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)

        promise.then((res) => {
            setState(res.data)
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        let promise = axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title: "Alex"}, settings)

        promise.then((res) => {
            debugger
            setState(res.data)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        let promise = axios.delete("https://social-network.samuraijs.com/api/1.1/todo-lists/e7725494-f14e-4653-8286-0864fb02c", settings)

        promise.then((res) => {
            setState(res.data)
        })

    }, [])



    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {

        let promise = axios.put("https://social-network.samuraijs.com/api/1.1/todo-lists/115d2889-3354-479e-8095-562454cc97e4", {title: "NewTitle"}, settings)

        promise.then((arg) => {
            setState(arg.data)
        })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}
