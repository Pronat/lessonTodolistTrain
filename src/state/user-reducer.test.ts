import React from 'react';
import {userReducer} from "./user-reducer";

test('UserReducer should increment only age', () => {
    const startState = {age: 34, childrenCount: 45, name: 'Tom'}
    const endState = userReducer(startState, {type: 'INCREMENT-AGE'})

    expect(endState.age).toBe(35)
    expect(endState.childrenCount).toBe(45)
})

test('UserReducer should increment only childrenCount', () => {
    const startState = {age: 15, childrenCount: 22, name: 'Gorge'}
    const endState = userReducer(startState, {type: 'INCREMENT-CHILDREN-COUNT'})

    expect(endState.childrenCount).toBe(23)
    expect(endState.age).toBe(15)
})

test('userReducer should be default', () => {
    const startState = {age: 34, childrenCount: 45, name: 'Tom'}
    const endState = userReducer(startState, {type 'NO-TYPE'})

    expect(endState.name).toBe('wrong action type')
})