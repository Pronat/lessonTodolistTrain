import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "React", isDone: false }
    ]


    const deleteTask = (id: number) => {
        tasks.filter((el) => el.id !== id)
        console.log(tasks)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
