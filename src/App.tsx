import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

type TasksStateType = {
    [key:string]: Array<TaskType>
}

function App() {


    function removeTask(id: string, todolistId: string) {
       let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(t=> t.id === todolistId)
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId: string) {
        let task = {id: v1(), title: title, isDone: false};
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todolistTasks];
        setTasks({...tasks});
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
       let todolist = todolists.find(tl=>tl.id === todolistId)
        if (todolist) {
            todolist.filter = value
            setTodolists([...todolists])
        }
    }

    let todolistId1 = v1()
    let todolistId2 = v1()

    let [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: "What to learn", filter: "active"},
        {id: todolistId2, title: "What to sell", filter: "completed"},
    ])

    let removeTodolist = (id: string) => {
        setTodolists(todolists.filter(t=>t.id !== id))
        delete tasks.id
        setTasks({...tasks})
    }

    let [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]:  [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: false},
            ],
            [todolistId2]:  [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "Coffee", isDone: false},
            ]
    })

    return (
        <div className="App">
            {
                todolists.map(tl=>{
                    let tasksForTodolist = tasks[tl.id];

                    if (tl.filter === "active") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
                    }
                    if (tl.filter === "completed") {
                        tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
                    }
                    return(
                        <Todolist
                            removeTodolist={removeTodolist}
                            id={tl.id}
                            key={tl.id}
                            title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            addTask={addTask}
                            changeTaskStatus={changeStatus}
                            filter={tl.filter}
                        />
                    )
                })
            }

        </div>
    );
}

export default App;
