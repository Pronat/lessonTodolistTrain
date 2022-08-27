import {TasksStateType} from "../App";

type StateType = TasksStateType
type ActionType = ;

export const taskReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case '':
            return state
        default:
            throw new Error("I don't understand this type")
    }
}

export const SomeAC1 = (id: string) => {
    return {
        type: '', id: id
    }as const
}

export const SomeAC2 = (id: string) => {
    return {
        type: '', id: id
    }as const
}