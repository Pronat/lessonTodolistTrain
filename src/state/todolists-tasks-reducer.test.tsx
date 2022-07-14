import {TasksStateType, TodolistType} from "../App";
import {AddTodolistAC, todolistsReducer} from "./todolists-reducer";
import {taskReduces} from "./task-reduces";

test('ids should be equals', () => {
    const startTasksState:TasksStateType = {}
    const startTodolistsState: Array<TodolistType> = []

    const action = AddTodolistAC("new Todolist")
    const endTaskState = taskReduces(startTasksState, action)
    const endTodolistState = todolistsReducer(startTodolistsState, action)
})