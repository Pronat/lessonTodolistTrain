import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from './App.module.css'

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
    changeTaskIsDone: (taskId: string, newIsDone: boolean) => void

}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim())
            setTitle('')
        }   else {
            setError('Title is required')
        }

    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
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
                   className={error ? s.error : ''}
            />
            <button onClick={addTask}>+</button>
            {error} && <div classname={s.errorMessage}>{error}</div>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const changeTaskIsDoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskIsDone(t.id, e.currentTarget.checked)
                    }


                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={changeTaskIsDoneHandler} />
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler }>All</button>
            <button onClick={ onActiveClickHandler }>Active</button>
            <button onClick={ onCompletedClickHandler }>Completed</button>
        </div>
    </div>
}
