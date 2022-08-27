import {useState} from "react";
import {v1} from "uuid";
import {TasksStateType, TodolistType} from "../App";
import {AddTaskAC, RemoveTaskAC, taskReducer} from "./task-reducer";

test('remove task should be correct', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: false},
            {id: "2", title: "React Book", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    }

    const endState = taskReducer(startState, RemoveTaskAC("todolistId2", "2"))

    expect(endState).toEqual({
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    });

})

test('add task should be correct', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: false},
            {id: "2", title: "React Book", isDone: false},
            {id: "3", title: "tea", isDone: false}
        ]
    }

    const newTitle = "New Task Title"
    const endState = taskReducer(startState, AddTaskAC("todolistId2", newTitle))

    expect(endState["todolistId1"][0].title).toBe("CSS")
    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(4)
    expect(endState["todolistId2"][3].title).toBe("New Task Title")
    expect(endState["todolistId2"][3].isDone).toBe(false)
})