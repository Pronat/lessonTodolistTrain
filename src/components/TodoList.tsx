import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import {FilterType, TaskType} from "../App";

type TodoListType = {
    title: string
    tasks: Array<TaskType>
    deleteTask: (id: string) => void
    FilterValue: (value: FilterType) => void
    addTask: (title: string) => void
    changeTaskStatus:(id: string, isDone: boolean) => void
}

export const TodoList = (props: TodoListType) => {
    const [newTitle, setNewTitle] = useState("")
    const addTaskHandler = () => {
        props.addTask(newTitle)
        setNewTitle("") }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => { setNewTitle(e.currentTarget.value)}

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) => {if (e.charCode === 13) {addTaskHandler()}}

    const onAllFilterValueHandler = () => {props.FilterValue("all")}
    const onActiveFilterValueHandler = () => {props.FilterValue("active")}
    const onCompletedFilterValueHandler = () => {props.FilterValue("completed")}




    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input value={newTitle}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                />
                <button onClick={
                    () => {addTaskHandler() }}>add</button>
            </div>
            <ul>{
                props.tasks.map(t => {
                    const deleteTaskHandler = () =>props.deleteTask(t.id)
                    const changeTaskStatusHandler = (e:ChangeEvent<HTMLInputElement>) => {props.changeTaskStatus(t.id, e.currentTarget.checked)}
                    return(
                        <li key={t.id}>
                    <input type="checkbox"
                            onChange={changeTaskStatusHandler}
                           checked={t.isDone}/>
                    <span>{t.title}</span>
                    <button onClick={deleteTaskHandler}>x</button>
                </li>)})
            }

            </ul>
            <div>
                <button onClick={onAllFilterValueHandler}>All</button>
                <button onClick={onActiveFilterValueHandler}>Active</button>
                <button onClick={onCompletedFilterValueHandler}>Complete</button>
            </div>
        </div>
    )
}