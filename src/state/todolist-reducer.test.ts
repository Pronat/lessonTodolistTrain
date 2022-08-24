import {useState} from "react";
import {TodolistType} from "../App";
import {v1} from "uuid";
import {
    AddTodolistAC, AddTodolistAT, ChangeTodolistFilterAC,
    ChangeTodolistFilterAT,
    ChangeTodolistTitleAT,
    RemoveTodolistAC, RemoveTodolistAT,
    todolistsReducer
} from "./todolist-reducer";

test('remove todolists should be correct', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()

    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const action: RemoveTodolistAT = {type: 'REMOVE-TODOLIST', id: todolistId1}

    const endState = todolistsReducer(startState, RemoveTodolistAC(todolistId1))

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
    const action: AddTodolistAT = {type: 'ADD-TODOLIST', title: newTitle}

    const endState = todolistsReducer(startState, action)

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTitle)
})

test('change todolist title should be correct', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let newTitle = 'completed'
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    let action: ChangeTodolistTitleAT  = {type: 'CHANGE-TODOLIST-TITLE', id: todolistId1, title: newTitle}
    const endState = todolistsReducer(startState, action)


    expect(endState[0].title).toBe(newTitle)
    expect(endState[1].title).toBe("What to buy")
})

test('change todolist filter should be correct', () => {
    let todolistId1 = v1()
    let todolistId2 = v1()
    let newFilter = 'completed'
    const startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    let action: ChangeTodolistFilterAT = {type: 'CHANGE-TODOLIST-FILTER', id: todolistId1, filter: newFilter}
    const endState = todolistsReducer(startState, ChangeTodolistFilterAC )


    expect(endState[0].filter).toBe(newFilter)
    expect(endState[1].filter).toBe('all')
})
