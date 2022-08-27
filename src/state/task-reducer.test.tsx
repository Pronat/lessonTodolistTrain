import {useState} from "react";
import {v1} from "uuid";
import {TasksStateType, TodolistType} from "../App";
import {taskReducer} from "./task-reducer";

test('remove task should be correct', () => {
   const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: true},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "JS CSS", isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: true},
            {id: "2", title: "React Book", isDone: false},
            {id: "3", title: "MacBook", isDone: true},
        ]
    }

    const endState = taskReducer(startState, AC)

    expect(endState).toEqual({
        "todolistId1": [
            { id: "1", title: "CSS", isDone: false },
            { id: "2", title: "JS", isDone: true },
            { id: "3", title: "React", isDone: false }
        ],
        "todolistId2": [
            { id: "1", title: "bread", isDone: false },
            { id: "3", title: "tea", isDone: false }
        ]
    });

})