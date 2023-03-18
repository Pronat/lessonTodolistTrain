import React from 'react';
import {TaskType} from "../Todolist";
import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: ActionsType): FilterValuesType => {
    switch (action.type) {
        case "CHANGE-FILTER": {
            return action.value
        }
        default: return state
    }
};

type ActionsType = ReturnType<typeof filterAllAC>


    export const filterAllAC = (value: FilterValuesType) => {
    return {
        type: 'CHANGE-FILTER', value
    } as const
    }
