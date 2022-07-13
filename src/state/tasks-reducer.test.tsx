import {v1} from "uuid";
import {TasksStateType} from "../App";
import {removeTaskAC, taskReduces} from "./task-reduces";

test('remove todolist correct', () => {
    const startState: TasksStateType = {
        "todolistId1": [
            {id: "1", title: "CSS", isDone: false},
            {id: "2", title: "JS", isDone: true},
            {id: "3", title: "React", isDone: false}
        ],
        "todolistId2": [
            {id: "1", title: "bread", isDone: false},
            {id: "2", title: "milk", isDone: true},
            {id: "3", title: "tea", isDone: false}
        ]
    }


    const action = removeTaskAC("2", "todolistId2")
    const endState = taskReduces(startState, action)

    expect(endState["todolistId1"].length).toBe(3)
    expect(endState["todolistId2"].length).toBe(2)
    expect(endState["todolistId2"][0].id).toBe("1")
    expect(endState["todolistId2"][0].id).toBeDefined()
    expect(endState["todolistId2"][0].title).toBe("bread")
    expect(endState["todolistId2"][0].title).toBeDefined()
    expect

})