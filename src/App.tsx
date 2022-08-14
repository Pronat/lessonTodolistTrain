import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks1: Array<TasksPropsType> = [
        {id: 1, title:"What to learn", isDone: false},
        {id: 2, title:"What to bye", isDone: true},
        {id: 3, title:"What to sell", isDone: false},
    ]
    const tasks2: Array<TasksPropsType> = [
        {id: 1, title:"What to read", isDone: true},
        {id: 2, title:"What to join", isDone: false},
        {id: 3, title:"What to fill", isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks1}/>
            <Todolist title={"What to bye"} tasks={tasks2}/>
        </div>
    );
}

export default App;

