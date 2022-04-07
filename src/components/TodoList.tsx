import React from "react";
import {TaskType} from "../App";

type TodoListType = {
    title:string
    tasks:Array<TaskType>
    deleteTask:(id: number) => void
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
                {/*<button onClick={()={props.tasks("all")}}>All</button>*/}
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}