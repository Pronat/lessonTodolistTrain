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
    isDoneChange: (taskId: string, newIsDone: boolean) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(title);
            setTitle("");
        }
        else {
            setError("Wrong input!")
        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null)
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter("all");
    const onActiveClickHandler = () => props.changeFilter("active");
    const onCompletedClickHandler = () => props.changeFilter("completed");

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
                   className={error ? s.errorBorder : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={s.errorText}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const isDoneChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.isDoneChange(t.id, !t.isDone)
                    }

                    return <li key={t.id} className={t.isDone ? s.isDone : s.filterColor}>
                        <input type="checkbox" checked={t.isDone} onChange={isDoneChangeHandler}/>
                        <span>{t.title}</span>
                        <button onClick={ onClickHandler }>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === "all" ? s.filterColor : ""}
                onClick={ onAllClickHandler }>All</button>
            <button className={props.filter === "active" ? s.filterColor : ""}
                onClick={ onActiveClickHandler }>Active</button>
            <button className={props.filter === "completed" ? s.filterColor : ""}
                onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
