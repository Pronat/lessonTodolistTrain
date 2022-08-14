import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";

function App() {
    const tasks1: Array<TasksType> = [
        {id: 1, title: "What to learn", isDone: true},
        {id: 2, title: "What to bye", isDone: false},
        {id: 3, title: "What to sell", isDone: true},
    ]
    const tasks2 = [
        {id: 1, title: "What to read", isDone: false},
        {id: 2, title: "What to know", isDone: true},
        {id: 3, title: "What to find", isDone: false},
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks1}/>
            <Todolist title={"What to bye"} tasks={tasks2}/>
        </div>
    );
}

export default App;


