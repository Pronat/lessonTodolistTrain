import {v1} from "uuid";
import {useState} from "react";
import {TodolistType} from "../App";
import {RemoveTodolistAC, todolistsReducer} from "./todolists-Reducer";

test('correct todolist should be removed', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistsReducer(startState, RemoveTodolistAC)

    expect(endState.length).toBe(1)
    expect(endState[0].title).toBe("What to learn")
})



test('correct add todolist', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTodolistTitle = "New Todolist"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const action = {type: "ADD-TODOLIST", title: newTodolistTitle} as const

    const endState = todolistsReducer(startState, action)
    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodolistTitle)
})

test('correct change todolists title', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTodolistTitle = "Changed todolist"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    let action = {type: 'CHANGE-TODOLIST-TITLE', id: todolistId1, title: newTodolistTitle} as const

    const endState = todolistsReducer(startState, action)
    expect(endState[0].title).toBe(newTodolistTitle)
    expect(endState[1].title).toBe("What to buy")
})

test('correct change todolists filter', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newFilter = "active"

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    let action = {type: "CHANGE-TODOLIST-FILTER", id: todolistId2, filter: newFilter} as const

    const endState = todolistsReducer(startState, action)
    expect(endState[0].filter).toBe("all")
    expect(endState[1].filter).toBe("active")
})