import React, {useState} from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";
import {v1} from "uuid";

export type TaskType = {
    id:string
    title:string
    isDone:boolean
}
export type FilterType = "all" | "completed" | "active"

function App() {
    let [tasks, setTasks] = useState<Array<TaskType>> ([
        {id:v1(), title:"HTML", isDone:true},
        {id:v1(), title:"CSS", isDone:false},
        {id:v1(), title:"React", isDone:true},
        {id:v1(), title:"Ajax", isDone:false},
        {id:v1(), title:"Array", isDone:true},
    ])

    const deleteTask = (id:string) => {
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

    const FilterValue = (value:FilterType) => {
        setFilter(value)
    }

    const addTask = (title:string) => {
        const newTask = {id:v1(), title:title, isDone:false}
        const newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

   const changeStatus = () => {
       const task = tasks.find()
   }



    return (
        <div className="App">
            <TodoList
                title = {"How to use"}
                tasks={tasksForTodolist}
                deleteTask={deleteTask}
                FilterValue={FilterValue}
                addTask={addTask}

            />
        </div>
    );
}


export default App;
