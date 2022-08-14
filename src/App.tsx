import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./Todolist";

export type TasksPropsType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const [tasks, setTasks] = useState<Array<TasksPropsType>>([
        {id: 1, title:"What to learn", isDone: false},
        {id: 2, title:"What to bye", isDone: true},
        {id: 3, title:"What to sell", isDone: false},
        {id: 4, title:"rest api", isDone: true},
        {id: 5, title:"graphQL", isDone: true},
    ])

    const removeTask = (taskId: number) => {
        const newTasks = tasks.filter(t => t.id !== taskId)
        console.log(newTasks)
    }

    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      tasks={tasks}
                      removeTask={removeTask} />
        </div>
    );
}

export default App;

