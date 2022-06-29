import {v1} from "uuid";
import {TodolistType} from "../App";
import {removeTodolistAC, todolistsReducer} from "./todolists-reducer";
import {addTodolistAC} from "./todolists-reducer";
import {userReducer} from "./user-reducer";

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1)
})

test('correct todolist should be added', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let todolistTitle = "newTitle"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const endState = todolistsReducer(startState, addTodolistAC(todolistId1, todolistTitle))

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(todolistTitle)
})