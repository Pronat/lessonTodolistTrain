import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

function App() {

    const tasks = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Hello world", isDone: false },
        { id: 5, title: "I am Happy", isDone: false },
    ]

    const removeTask = (taskId: number) => {
        const newTasks = tasks.filter(t => t.id !== taskId)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasks}
                removeTask={removeTask}
            />
        </div>
    );
}

export default App;
