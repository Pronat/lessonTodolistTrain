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
    filter: FilterValuesType

}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState("")
    const [error, setError] = useState<string | null>(null)
    const [filterValueForButton, setFilterValueForButton] = useState<FilterValuesType>('all')

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
        setError('')
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {
        props.changeFilter("all")
        setFilterValueForButton("all")
    }

    const onActiveClickHandler = () => {
        props.changeFilter("active")
        setFilterValueForButton("active")
    }
    const onCompletedClickHandler = () => {
        props.changeFilter("completed")
        setFilterValueForButton("completed")
    };


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={ onChangeHandler }
                   onKeyPress={ onKeyPressHandler }
                   className={error ? s.error : ''}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={s.errorMessage}>Title is required!</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const changeTaskIsDoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskIsDone(t.id, e.currentTarget.checked)
                    }


                    return <li key={t.id} className={t.isDone ===true ? s.isDone : ''}>
                        <input type="checkbox" checked={t.isDone} onChange={changeTaskIsDoneHandler} />
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button onClick={ onAllClickHandler } className={(filterValueForButton === 'all') ? s.activeButtonFilter : ''}>All</button>
            <button onClick={ onActiveClickHandler }  className={filterValueForButton === 'active' ? s.activeButtonFilter : ''}>Active</button>
            <button onClick={ onCompletedClickHandler }  className={filterValueForButton === 'completed' ? s.activeButtonFilter : ''}>Completed</button>
        </div>
    </div>
}
