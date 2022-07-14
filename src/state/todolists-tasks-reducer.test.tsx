import {TasksStateType, TodolistType} from "../App";
import {AddTodolistAC} from "./todolists-reducer";

test('ids should be equals', () => {
    const startTasksState:TasksStateType = {}
    const startTodolistsState: Array<TodolistType> = []

    const action = AddTodolistAC("new Todolist")
})