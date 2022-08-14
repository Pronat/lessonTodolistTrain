import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

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
}

export function Todolist(props: PropsType) {
        let [title, setTitle] = useState('')
    const addTask = () => {
        props.addTask(title)
        setTitle('')
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)}
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {if (e.charCode === 13) {addTask()}}
    const onClickAll = () => { props.changeFilter("all") }
    const onClickActive = () => { props.changeFilter("active") }
    const onClickCompleted = () => { props.changeFilter("completed") }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    return (
                    <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={ () => { props.removeTask(t.id) } }>x</button>
                </li>)})
            }
        </ul>
        <div>
            <button onClick={onClickAll}>
                All
            </button>
            <button onClick={onClickActive}>
                Active
            </button>
            <button onClick={onClickCompleted}>
                Completed
            </button>
        </div>
    </div>
}
