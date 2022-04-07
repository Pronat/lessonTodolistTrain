import React from "react";
import {FilterType, TaskType} from "../App";

type TodoListType = {
    title:string
    tasks:Array<TaskType>
    deleteTask:(id: number) => void
    FilterValue:(value: FilterType) => void
}

export const TodoList = (props:TodoListType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>{
                props.tasks.map(t=><li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={()=>{props.deleteTask(t.id)}}>x</button>
                </li>)
            }

            </ul>
            <div>
                <button onClick={()=>{props.FilterValue("all")}}>All</button>
                <button onClick={()=>{props.FilterValue("active")}}>Active</button>
                <button onClick={()=>{props.FilterValue("completed")}}>Complete</button>
            </div>
        </div>
    )
}