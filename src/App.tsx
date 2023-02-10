import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [tasks,setTasks] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "React", isDone: false },
        { id: 5, title: "Redux", isDone: true }
    ])


    const deleteTask = (id: number) => {
       let tasks1 = tasks.filter((el) => el.id !== id)
        setTasks(tasks1)
    }

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} deleteTask={deleteTask} />
        </div>
    );
}

export default App;
