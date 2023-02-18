import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {SuperButton} from "./components/SuperButton";


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }

    const onClickChangeFilterHandler = (name: FilterValuesType, todoId: number) => {
       props.changeFilter(name, todoId)
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.id)
    }

    const addTaskHandler = () => {
        props.addTask(title, props.id)
        setTitle('')
    }

    const removeTaskHandler = (taskId: string, id: number) => {
        props.removeTask(taskId, id)
    }


    return <div>
        <h3> {props.title}
            <button onClick={removeTodolistHandler}>x
            </button>

        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTaskHandler}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={() => {removeTaskHandler(t.taskId, props.id)}}>x</button>
                        {/*<button onClick={() => {props.removeTask(t.taskId, props.id)}}>x</button>*/}
                    </li>
                })
            }
        </ul>
        <span>
            <div> <SuperButton
                filter={props.filter}
                name={'all'}
                callBack={()=>{onClickChangeFilterHandler('all', props.id)}}
            />
            </div>

            <SuperButton
                filter={props.filter}
                name={'active'}
                callBack={()=>{onClickChangeFilterHandler('active', props.id)}}
            />
            <SuperButton
                filter={props.filter}
                name={'completed'}
                callBack={()=>{onClickChangeFilterHandler('completed', props.id)}}
            />

            {/*<button className={props.filter === 'all' ? "active-filter" : ""}*/}
            {/*        onClick={()=>{}}>All*/}
            {/*</button>*/}
            {/*<button className={props.filter === 'active' ? "active-filter" : ""}*/}
            {/*        onClick={()=>{}}>Active*/}
            {/*</button>*/}
            {/*<button className={props.filter === 'completed' ? "active-filter" : ""}*/}
            {/*        onClick={()=>{}}>Completed*/}
            {/*</button>*/}
        </span>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


