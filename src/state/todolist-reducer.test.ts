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
    expect(endState.length).toBe(1)

})
