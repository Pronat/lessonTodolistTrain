import React from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const tasks: Array<TasksPropsType> = [
        {id: 1, title:"What to learn", isDone: false},
        {id: 2, title:"What to bye", isDone: true},
        {id: 3, title:"What to sell", isDone: false},
        {id: 4, title:"rest api", isDone: true},
        {id: 5, title:"graphQL", isDone: true},
    ]

    return (
        <div className="App">
            <Todolist title={"What to learn"} tasks={tasks}/>
        </div>
    );
}

export default App;

