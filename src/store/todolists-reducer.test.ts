import {v1} from "uuid";
import {todolistReducer} from "./todolists-reducer";
import {TodolistType} from "../App";

test('test todolist', ()=> {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let startState: Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    let endState = todolistReducer(startState, {type: 'XXX'})

})