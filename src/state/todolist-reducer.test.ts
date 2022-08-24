import {useState} from "react";
import {TodolistType} from "../App";
import {v1} from "uuid";
import {RemoveTodolistAC, todolistsReducer} from "./todolist-reducer";

test('remove todolists should be correct', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const action = {type: 'REMOVE-TODOLIST', id: todolistId1}

    const endState = todolistsReducer(startState, {type: 'REMOVE-TODOLIST', id: todolistId1})

    expect(endState.length).toBe(1)
    expect(endState[0].title).toBe("What to buy")

})
test('add todolist should be correct', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let newTitle = "New todolist Title"
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const action = {type: 'ADD-TODOLIST', title: newTitle}

    const endState = todolistsReducer(startState, {type: 'ADD-TODOLIST', title: newTitle})

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTitle)

})
