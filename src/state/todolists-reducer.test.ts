import {v1} from "uuid";
import {TodolistType, FilterValuesType} from "../App";
import {
    AddTodolistAC, ChangeTodolistFilterAC,
    ChangeTodolistFilterActionType, ChangeTodolistTitleAC,
    ChangeTodolistTitleActionType,
    RemoveTodolistAC,
    todolistsReducer
} from "./todolists-reducer";

test('correct remove todolist', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();

    const startState:Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]

    const endState = todolistsReducer(startState, RemoveTodolistAC(todolistId1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistId2)
})

test('Add todolist correct', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTodolistTitle = "New Todolist"
    const startState:Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    const endState = todolistsReducer(startState, AddTodolistAC(newTodolistTitle))

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodolistTitle)
    expect(endState[1].title).toBe("What to buy")
    expect(endState[2].filter).toBe("all")
})

test("Todolist change title", () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newTodolistTitle = 'newTodolist'
    const startState:Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    // const action: ChangeTodolistTitleActionType = {
    //     type:'CHANGE-TODOLIST-TITLE',
    //     id: todolistId2,
    //     title: newTodolistTitle
    // }
    const endState = todolistsReducer(startState, ChangeTodolistTitleAC(todolistId2, newTodolistTitle))

    expect(endState[0].title).toBe("What to learn")
    expect(endState[1].title).toBe(newTodolistTitle)
})

test('change filter todolist should be correct', () => {
    let todolistId1 = v1();
    let todolistId2 = v1();
    let newFilter: FilterValuesType = "completed"
    const startState:Array<TodolistType> = [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ]
    // const action: ChangeTodolistFilterActionType = {
    //     type: "CHANGE-TODOLIST-FILTER",
    //     id: todolistId2,
    //     filter: newFilter
    // };
    const endState = todolistsReducer(startState, ChangeTodolistFilterAC(todolistId2, newFilter))

    expect(endState[0].filter).toBe("all")
    expect(endState[1].filter).toBe(newFilter)
})