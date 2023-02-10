import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
export type FilterType = 'all' | 'active' | 'completed'
function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false },
        { id: 4, title: "React", isDone: false },
        { id: 5, title: "Redux", isDone: true }
    ])


    const deleteTasks = (taskId: number) => {
        let tasksNew = tasks.filter((el) => el.id !== taskId)
        setTasks(tasksNew)
    }

    let [filter, setFilter] = useState<FilterType>('all')
    let tasksAfterFilter = tasks
    if (filter === 'active') {
        tasksAfterFilter = tasks.filter((el) => el.isDone !== true )
    }
    if (filter === 'completed') {
        tasksAfterFilter = tasks.filter((el) => el.isDone === true )
    }

    const changeFilter = (consist: FilterType) => {
        setFilter(consist)
    }

    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksAfterFilter}
                deleteTasks={deleteTasks}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
