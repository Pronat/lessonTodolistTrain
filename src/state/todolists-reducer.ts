import {FilterValuesType} from "../App";

type StateType = {
    id: string
    title: string
    filter: FilterValuesType
}

type ActionType = {
[key:string]: any
}

export const todolistsReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(el => el.id != action.id)
        default:
            throw new Error(`Invalid type`)
    }
}

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (todolistId1: string) => {
    return{
        type: 'REMOVE-TODOLIST',
        payload: {
            todolistId1
        }
    } as const
}