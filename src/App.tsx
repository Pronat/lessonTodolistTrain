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
            {id: v1(), title: "React", isDone: false},
            {id: v1(), title: "Rest API", isDone: true},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
    })




    function removeTask(taskId: string, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(el => el.id !== taskId)
        setTasks({...tasks})
    }

    function addTask(todolistId: string, title: string) {
       let newTask = {id: v1(), title, isDone: false}
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [newTask, ...todolistTasks]
        setTasks({...tasks})
    }

    function changeStatus(taskId: string, todolistId: string, isDone: boolean) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(el => el.id === taskId)
        if (task) {
            task.isDone = isDone
            setTasks({...tasks})
        }

    }


    function changeFilter(todolistId: string, filterValue: FilterValuesType) {
        let todolist = todolists.find(el => el.id === todolistId)
        if (todolist) {
            todolist.filter = filterValue
            setTodolists([...todolists])
        }
    }

    return (
        <div className="App">
            {
                todolists.map(el => {
                    let tasksForTodolist = tasks[el.id];

                    if (el.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(el => el.isDone === false);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }
                    return (
                        <Todolist
                            key={el.id}
                            todolistId={el.id}
                            title={el.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={el.filter}
                        />
                    )
                })

            }
        </div>
    );
}

export default App;
