import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type FilterValuesType = "all" | "active" | "completed";

function App() {

    let todolistId1 = v1()
    let todolistId2 = v1()

    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        {id: todolistId1, title: 'What to learn', filter: 'all'},
        {id: todolistId2, title: 'What to by', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistId1] : [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
        ],
        [todolistId2]: [
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: true},
            {id: v1(), title: "Redux", isDone: false},
        ] }
    );


    function removeTask(todolistId: string ,taskId: string) {
        let todolistsTasks = tasks[todolistId]
        tasks[todolistId] = todolistsTasks.filter((el)=> el.id !== taskId)
        setTasks({...tasks})

    }

    function addTask(title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        // setTasks([...tasks]);
    }



    function changeFilter(todolistId: string, value: FilterValuesType) {
       setTodolists(todolists.map(el=> el.id === todolistId ? {...el, filter: value} : el))
    }


    return (
        <div className="App">
            {
                todolists.map((el)=> {
                    let tasksForTodolist = tasks[el.id];
                    if (el.filter === "active") {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone === false);
                    }
                    if (el.filter === "completed") {
                        tasksForTodolist = tasks[el.id].filter(t => t.isDone === true);
                    }
                    return(
                        <Todolist
                            todolistId={el.id}
                            key={el.id}
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
