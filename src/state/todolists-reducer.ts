import {FilterValuesType} from "../App";

type StateType = {
    id: string
    title: string
    filter: FilterValuesType
}

type ActionType = {
[key:string]: string
}

export const todolistsReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'XXX':
            return state
        default:
            throw new Error(`Invalid type`)
    }
}