import {useState} from "react";
import {TasksStateType} from "../App";
import {addTaskAC, changeTaskStatusAC, removeTaskAC, tasksReducer,} from "./tasks-reducer";

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
    expect(endState["todolistId2"].every(el => el.id !== "2")).toBeTruthy()
    expect(endState["todolistId2"][0].id).toBe("1")
    expect(endState["todolistId2"][1].id).toBe("3")
})

test('correct add task', () => {
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

    const action = addTaskAC("todolistId1","bear" )
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId1"].length).toBe(4)
    expect(endState["todolistId2"].length).toBe(3)
    expect(endState["todolistId1"][0].id).toBeDefined()
    expect(endState["todolistId1"][0].title).toBe("bear")
    expect(endState["todolistId1"][0].isDone).toBe(false)
})

test('change status of task correct', () => {
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
    const action = changeTaskStatusAC("todolistId2", "1", true)
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][0].isDone).toBe(true)
    expect(endState["todolistId2"][1].isDone).toBe(true)
    expect(endState["todolistId1"][0].isDone).toBe(false)
})

test('change task title correct', () => {
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

    const action = changeTaskTitleAC("todolistId2", "3", "Ozone")
    const endState = tasksReducer(startState, action)

    expect(endState["todolistId2"][0].title).toBe("Milk")
    expect(endState["todolistId2"][2].title).toBe("Ozone")
    expect(endState["todolistId1"][1].title).toBe("JS")

})