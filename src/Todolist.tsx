import React from "react";
import {FilterValueType, TasksPropsType} from "./App";

type TodolistPropsType = {
    title: string
    tasks: Array<TasksPropsType>
    removeTask: (taskId: number) => void
    changeFilter:(value: FilterValueType) => void

}

export const Todolist: React.FC<TodolistPropsType> = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {
               props.tasks.map(t => <li key={t.id}>
                   <input type={"checkbox"} checked={t.isDone}/>
                   <span>{t.title}</span>
                    <button onClick={() => {props.removeTask(t.id)}}>x</button>
               </li>)
            }
            <div>
                <button onClick={() => {props.changeFilter("all")}}>All</button>
                <button onClick={() => {props.changeFilter("active")}}>Active</button>
                <button onClick={() => {props.changeFilter("completed")}}>Completed</button>
            </div>
        </div>
    )
}