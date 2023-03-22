import {v1} from "uuid";
import {removeTodolistAC, todolistsReducer} from "./todolists-reducer";
import {TodolistType} from "../App";

test('test todolist', ()=> {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const endState = todolistsReducer(startState, removeTodolistAC(todolistId1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})
