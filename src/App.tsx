import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to bye", filter: "all"},
    ])

    let [tasks, setTasks] = useState({
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: true},
            {id: v1(), title: "Graph", isDone: false},
        ]
    })


    function removeTask(id: string, todolistId: string) {
        let tasksTodolists = tasks[todolistId]
        tasks[todolistId] = tasksTodolists.filter(el => el.id !== id)
        setTasks({...tasks})
    }

    function addTask(todolistId: string, taskId: string, title: string) {
        let tasksTodolists = tasks[todolistId]
        let newTask = {id: v1(), title, isDone: false}
        tasks[todolistId] = [...tasksTodolists, newTask]
        setTasks({...tasks})
    }


    function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
        let tasksTodolists = tasks[todolistId]
        let newTask = tasksTodolists.find(el => el.id === taskId)
        if (newTask) {
            newTask.isDone = isDone
            setTasks({...tasks})
        }
    }


    function changeFilter(todolistId: string, value: FilterValuesType) {
        let todolist = todolists.find(el => el.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists]);
        }

    }


    return (
        <div className="App">
            {
                todolists.map(tl => {
                    let tasksForTodolist = tasks[tl.id];

                    if (tl.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }
                    return <Todolist
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tl.filter}
                    />
                })
            }

        </div>
    );
}

export default App;
