import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

export type TaskType = {
    id:number
    title:string
    isDone:boolean
}

let tasks:Array<TaskType> = [
    {id:1, title:"HTML", isDone:true},
    {id:2, title:"CSS", isDone:false},
    {id:3, title:"React", isDone:true},
    {id:4, title:"Ajax", isDone:false},
    {id:5, title:"Array", isDone:true},
]



function App() {
    const deleteTask = (id:number) => {
        tasks = tasks.filter(t=>{t.id !== id})
        console.log(tasks)
    }

    return (
        <div className="App">
            <TodoList
                title = {"How to use"}
                tasks={tasks}
                deleteTask={deleteTask}
            />
        </div>
    );
}


export default App;
