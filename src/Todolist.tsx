import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from "./App.module.css"

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    isDoneTasks: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error,setError] = useState<string | null>(null)

   const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title)
            setTitle('')
        }
        else {
            setError("Title is required")
        }
   }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

   const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask()
        }
   }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        {error && <div className={s.errorMessage}>{error}</div>}
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
                   className={error ? s.error : ''}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                   const isDoneTasksHandler = (e:  ChangeEvent<HTMLInputElement>) => {
                        let newIsDone = e.currentTarget.checked
                        props.isDoneTasks(t.id, newIsDone)
                    }

                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={isDoneTasksHandler}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }

        </ul>
        <div>
            <button className={props.filter === "all" ? s.activeFilter : ""}
                onClick={ onAllClickHandler }>All</button>
            <button className={props.filter === "active" ? s.activeFilter : ""}
                onClick={ onActiveClickHandler }>Active</button>
            <button className={props.filter === "completed" ? s.activeFilter : ""}
                onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
