import React, {useState} from "react";
import {FilterType, TaskType} from "../App";

type TodoListType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: (id: string) => void
    FilterValue: (value: FilterType) => void
    addTask: (title: string) => void
}

export const TodoList = (props: TodoListType) => {
    const [newTitle, setNewTitle] = useState("")


    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle}
                       onChange={(e) => {
                           setNewTitle(e.currentTarget.value) }}
                       onKeyPress={(e)=>{
                           if (e.charCode === 13) {
                                   props.addTask(newTitle)
                                   setNewTitle("")
                       }}}
                />
                <button onClick={
                    () => {
                        props.addTask(newTitle)
                        setNewTitle("")
                    }}>add
                </button>
            </div>
            <ul>{
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={() => props.deleteTask(t.id)}>x</button>
                </li>)
            }

            </ul>
            <div>
                <button onClick={() => {
                    props.FilterValue("all")
                }}>All
                </button>
                <button onClick={() => {
                    props.FilterValue("active")
                }}>Active
                </button>
                <button onClick={() => {
                    props.FilterValue("completed")
                }}>Complete
                </button>
            </div>
        </div>
    )
}