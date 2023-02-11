import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterType = 'all' | 'active' | 'completed'

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Hello world", isDone: true},
        {id: 5, title: "I am Happy", isDone: false},
        {id: 6, title: "Yo", isDone: false}
    ])


    const removeTask = (propsId: number) => {
        let tasksNew = tasks.filter((el) => el.id !== propsId)
        setTasks(tasksNew)
    }

    const [filter, setFilter] = useState<FilterType>('all')
    const changeFilter = (filterValue: FilterType) => {
        setFilter(filterValue)
    }
    let tasksAfterFilter = tasks
    if (filter === 'completed') {
        tasksAfterFilter = tasks.filter((el)=>el.isDone)
    }
 if (filter === 'active') {
        tasksAfterFilter = tasks.filter((el)=>!el.isDone)
    }


    return (
        <div className="App">
            <Todolist
                title="What to learn"
                tasks={tasksAfterFilter}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
