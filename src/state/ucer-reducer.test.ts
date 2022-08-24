import {userReducer} from "./ucer-reducer";

test('user reducer should increment only age', () => {
    const startState = {age: 24, childrenCount: 4, name: "Olaf"}
    const endState = userReducer(startState, {type: "INCREMENT-AGE"})
    expect(endState.age).toBe(25)
    expect(endState.childrenCount).toBe(4)
})

test('user reducer should increment only childrenCount', () => {
    const startState = {age: 24, childrenCount: 4, name: "Olaf"}
    const endState = userReducer(startState, {type: "INCREMENT-CHILDREN-COUNT"})
    expect(endState.age).toBe(24)
    expect(endState.childrenCount).toBe(5)
})