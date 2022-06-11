import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: filterReducerType) => {
    switch (action.type) {
        case "CHANGE-FILTER" : {
            return action.payload.value
        }
        default:
            return state
    }
}

type filterReducerType = changeFilterACType

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value: FilterValuesType) => {
    return {
        type: "CHANGE-FILTER",
        payload: {value:value}
    } as const
}