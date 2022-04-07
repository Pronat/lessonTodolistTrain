import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

export type TaskType = {
    id:number
    title:string
    isDone:boolean
}
type FilterType = "all" | "completed" | "active"

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>> ([
        {id:1, title:"HTML", isDone:true},
        {id:2, title:"CSS", isDone:false},
        {id:3, title:"React", isDone:true},
        {id:4, title:"Ajax", isDone:false},
        {id:5, title:"Array", isDone:true},
    ])

    const deleteTask = (id:number) => {
       const filteredTasks = tasks.filter(t=>t.id !== id)
        setTasks(filteredTasks)
    }
    const [filter, setFilter] = useState<FilterType>("all")
    let tasksForTodolist = tasks
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t=>t.isDone === true)
    }
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t=>t.isDone === false)
    }

    return (
        <div className="App">
            <TodoList
                title = {"How to use"}
                tasks={tasksForTodolist}
                deleteTask={deleteTask}
            />
        </div>
    );
}


export default App;
