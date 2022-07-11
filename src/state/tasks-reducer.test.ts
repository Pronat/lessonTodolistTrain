import {useState} from "react";
import {TasksStateType} from "../App";
import {action1AC, tasksReducer,} from "./tasks-reducer";

test('task should be deleted correct', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: true},
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: true},
            {id: "2", title: "React Book", isDone: true},
            {id: "3", title: "tea", isDone: true},
        ]
    }
    const action = removeTaskAC("2", "todolistID2")

    const endState = tasksReducer(startState, action)



})