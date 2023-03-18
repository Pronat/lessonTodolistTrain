import React from 'react';
import {TaskType} from "../Todolist";
import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: ActionsType): FilterValuesType => {
    switch (action.type) {
        case 'Filter-ALL': {
          return state
        }

        default: return state
    }
};

type ActionsType = ReturnType<typeof filterAllAC> | ReturnType<typeof filterActiveAC> | ReturnType<typeof filterCompletedAC>


    export const filterAllAC = (value: FilterValuesType) => {
    return {
        type: 'Filter-ALL', value
    } as const
    }
    export const filterActiveAC = (value: FilterValuesType) => {
    return {
        type: 'Filter-ALL', value
    } as const
    }
    export const filterCompletedAC = (value: FilterValuesType) => {
    return {
        type: 'Filter-ALL', value
    } as const
    }
