import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const [tasks1, setTasks1] = useState([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "ReactJS", isDone: false },
        { id: 5, title: "R", isDone: true },
        { id: 6, title: "TTTJS", isDone: false },
    ])

    const deleteTask = (taskId: number) => {
        let tasksNew = tasks1.filter((el) => el.id !== taskId)
        setTasks1(tasksNew)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks1}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
