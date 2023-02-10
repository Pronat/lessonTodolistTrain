import React from 'react';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    deleteTasks: (id: number) => void
    changeFilter: (consist: string) => void

}

export function Todolist(props: PropsType) {

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((el) => {
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
            <button onClick={()=>{props.changeFilter('all')}}>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </div>
}
