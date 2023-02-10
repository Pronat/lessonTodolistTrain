import React, {useState} from 'react';
import {FilterType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    deleteTasks: (id: number) => void

}

export function Todolist(props: PropsType) {
    let [filter, setFilter] = useState<FilterType>('all')

    const changeFilter = (consist: FilterType) => {
        setFilter(consist)
    }

    let tasksAfterFilter = props.tasks
    if (filter === 'active') {
        tasksAfterFilter = props.tasks.filter((el) => el.isDone !== true)
    }
    if (filter === 'completed') {
        tasksAfterFilter = props.tasks.filter((el) => el.isDone === true)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasksAfterFilter.map((el) => {
                    return (
                        <li key={el.id}><input type={'checkbox'} checked={el.isDone}/>{el.title}
                            <button onClick={() => {
                                props.deleteTasks(el.id)
                            }}>✖️
                            </button>
                        </li>

                    )
                }
            )}

        </ul>
        <div>
            <button onClick={() => {
                changeFilter('all')
            }}>All
            </button>
            <button onClick={() => {
                changeFilter('active')
            }}>Active
            </button>
            <button onClick={() => {
                changeFilter('completed')
            }}>Completed
            </button>
        </div>
    </div>
}
