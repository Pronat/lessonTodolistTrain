import React, {KeyboardEventHandler, useState} from 'react';
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
    addTask: (taskTitle: string) => void
    changeFilter: (value: FilterValuesType) => void
}

export function Todolist(props: PropsType) {
    const [taskTitle, setTaskTitle] = useState('')

    const onChangeAddTaskHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    const onKeyPressAddTaskHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickAddTaskHandler()
        }
    }

    const onClickAddTaskHandler = () => {
        props.addTask(taskTitle)
        setTaskTitle('')
    }

    const onClickMainHandler = (name: FilterValuesType) => {
        props.changeFilter(name)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                onChange={onChangeAddTaskHandler}
                value={taskTitle}
                onKeyPress={onKeyPressAddTaskHandler}
            />
            <button onClick={onClickAddTaskHandler}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onClickInMapHandler = () => {
                        props.removeTask(t.id)
                    }
                    return(
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone}/>
                            <span>{t.title}</span>
                            <button onClick={onClickInMapHandler}>x
                            </button>
                        </li>
                    )
                }

                )
            }  
        </ul>
        <div>
            <button onClick={()=>onClickMainHandler("all")}>
                All
            </button>
            <button onClick={()=>onClickMainHandler("active")}>
                Active
            </button>
            <button onClick={()=>onClickMainHandler("completed")}>
                Completed
            </button>
        </div>
    </div>
}
