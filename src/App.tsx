import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);


    function removeTask(id: string, todolistId: string) {
       let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(t=>t.id !== todolistId)
        setTasks({...tasks})
    }

    function addTask(title: string, todolistId: string) {
       let task = {id: v1(), title, isDone: false}
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ... todolistTasks]
        setTasks({...tasks})
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: string) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks({...tasks});
    }


    function changeFilter(value: FilterValuesType, todolistId: string) {
        let todolist = todolists.find(tl => tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    let todolistId1 = v1()
    let todolistId2 = v1()
    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "active"},
        {id: todolistId2, title: "What to sell", filter: "active"},
    ])

    let [tasks, setTasks] = useState({
            [todolistId1]:
                [{id: v1(), title: "HTML&CSS", isDone: true},
                    {id: v1(), title: "JS", isDone: false},],
            [todolistId2]:
                [{id: v1(), title: "Milk", isDone: true},
                    {id: v1(), title: "Juice", isDone: false},],
        }
    )

    let removeTodolist = (id: string) => {
        setTodolists(todolists.filter(tl=>tl.id !== id))
        delete tasks[id]
        setTasks({...tasks})
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
                    return (
                        <Todolist title={tl.title}
                                  tasks={tasksForTodolist}
                                  removeTask={removeTask}
                                  changeFilter={changeFilter}
                                  addTask={addTask}
                                  changeTaskStatus={changeStatus}
                                  filter={tl.filter}
                                  id={tl.id}
                                  key={tl.id}
                                  removeTodolist={removeTodolist}
                        />
                    )
                })
            }

        </div>
    );
}

export default App;
