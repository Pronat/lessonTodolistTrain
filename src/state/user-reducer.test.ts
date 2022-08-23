import {userReducer} from "./user-reducer";

test('userReducer should increment only age', () => {
    const startState = {age: 18, childrenCount: 3, name: "Bon"}
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})
    expect(endState.age).toBe(19)
    expect(endState.childrenCount).toBe(3)
})

test('userReducer should increment only childrenCount', () => {
    const startState = {age: 18, childrenCount: 3, name: "Bon"}
    const endState = userReducer(startState, {type:'INCREMENT-CHILDREN-COUNT'})
    expect(endState.age).toBe(18)
    expect(endState.childrenCount).toBe(4)
})

test('userReducer should change name', () => {
   const startState = {age: 25, childrenCount: 8 , name: "Olaf"}
    const newName = "Jose"
    const endState = userReducer(startState, {type: "CHANGE-NAME", newName: newName})

    expect(endState.name).toBe(newName)
    expect(endState.age).toBe(25)
})