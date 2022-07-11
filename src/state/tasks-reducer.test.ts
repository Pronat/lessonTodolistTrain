import {useState} from "react";

test('task should be deleted correct', () => {
    let startState = useState({
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
    })
})