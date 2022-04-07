import React from 'react';
import './App.css';
import {TodoList} from "./components/TodoList";

export type TaskType = {
    id:number
    title:string
    isDone:boolean
}

const tasks1:Array<TaskType> = [
    {id:1, title:"HTML", isDone:true},
    {id:2, title:"HTML", isDone:false},
    {id:3, title:"HTML", isDone:true},
]
const tasks2:TaskType[] = [
    {id:1, title:"HTML", isDone:false},
    {id:2, title:"HTML", isDone:true},
    {id:3, title:"HTML", isDone:false},
]


function App() {
    return (
        <div className="App">
            <TodoList title = {"How to use"} tasks={tasks1} />
            <TodoList title = {"How to find"} tasks={tasks2}/>
            <TodoList title = {"How to know"} tasks={tasks1}/>
        </div>
    );
}


export default App;
