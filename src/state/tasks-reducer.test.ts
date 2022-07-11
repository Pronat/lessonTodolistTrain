import {useState} from "react";
import {TasksStateType} from "../App";
import {removeTaskAC, tasksReducer,} from "./tasks-reducer";

test('task should be deleted correct', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: false},
            {id: "2", title: "React Book", isDone: true},
            {id: "3", title: "tea", isDone: false},
        ]
    }
    const action = removeTaskAC("2", "todolistId2")

    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(2)
    expect(endState["todolistId2"].every(t => t.id != "2")).toBeTruthy()

})