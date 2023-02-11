import React from 'react';
import {FilterType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (propsId: number)=>void
    changeFilter: (filterValue: FilterType)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {
                props.tasks.map((el) =>
                    <li key={el.id}><input type={'checkbox'} checked={el.isDone}/>{el.title}
                        <button onClick={()=>{props.removeTask(el.id)}}>x</button>
                    </li>)

            }

        </ul>
        <div>
            <button onClick={()=>{props.changeFilter('all')}}>All</button>
            <button onClick={()=>{props.changeFilter('active')}}>Active</button>
            <button onClick={()=>{props.changeFilter('completed')}}>Completed</button>
        </div>
    </div>
}
