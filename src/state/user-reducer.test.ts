import {userReducer} from "./user-reducer";

test('user reducer should increment only age', () => {
    const startState = {age: 20, childrenCount: 2, name: 'Bob'}
    const action = {
        type: 'INCREMENT-AGE'
    }
    const endState = userReducer(startState, action)

    expect(endState.age).toBe(21)
    expect(endState.childrenCount).toBe(2)
})

test('user reducer increment should change only  childrenCount', () => {
    const startState = {age: 30, childrenCount: 4, name: "Joy"}
    const action = {type: 'INCREMENT-CHILDREN-COUNT'}
    const endState = userReducer(startState, action)
    expect(endState.childrenCount).toBe(5)
    expect(endState.name).toBe('Joy')
})

test('useReducer should change name of user', () => {
    const startState = {name: "Roy", age: 30, childrenCount: 1, }
    const newName = "Bond"
    const action = {type: 'CHANGE-NAME', newName: newName}
    const endState = userReducer(startState, action)

    expect(endState.name).toBe(newName)
})