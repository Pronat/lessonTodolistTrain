import React from 'react';
import {TaskType} from "../Todolist";
import {v1} from "uuid";
import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: ActionsType): TaskType[] => {
    switch (action.type) {
        case 'Filter-ALL': {
          return state
        }

        default: return state
    }
};

type ActionsType =