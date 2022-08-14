import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
export type FilterValueType = "all" | "active" | "completed"

function App() {

    let [tasks, setTasks] = useState<Array<TaskType>> ([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "Hello world", isDone: false },
        { id: 5, title: "I am Happy", isDone: false },
    ])

    const removeTask = (taskId: number) => {
        const newTasks = tasks.filter(t => t.id !== taskId)
        setTasks(newTasks)
    }

    let [filter, setFilter] = useState<FilterValueType>("all")
    let tasksForTodolist = tasks
    if (filter === "active") {
        tasksForTodolist = tasks.filter(t => t.isDone === false)
    }
    if (filter === "completed") {
        tasksForTodolist = tasks.filter(t => t.isDone === true)
    }

    const changeFilter = (value: FilterValueType) => {
        setFilter(value)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
