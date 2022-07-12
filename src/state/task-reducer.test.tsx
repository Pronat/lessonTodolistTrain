import {v1} from "uuid";
import {TasksStateType} from "../App";
import {removeTaskAC, taskReducer} from "./task-reducer";

test('remove todolist correct', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "HTML&CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "ttt", isDone: false},
        ],
        "todolistId2": [
            {id: "1", title: "Milk", isDone: false},
            {id: "2", title: "React Book", isDone: true},
            {id: "3", title: "React", isDone: true},
        ]
    }

    const action = removeTaskAC("todolistId2", "2")
    const endState = taskReducer(startState, action)

    expect(endState("todolistId2"[1].title)).toBe("React")
})