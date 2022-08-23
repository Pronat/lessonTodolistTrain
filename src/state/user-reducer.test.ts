import {userReducer} from "./user-reducer";

test('reducer should increment only age', () => {
    const startState = {age: 20, childrenCount: 4, name: "Aled"}

    const endState = userReducer(startState, {type: "INCREMENT-AGE"})

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(4)
})