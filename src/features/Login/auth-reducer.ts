import {LoginParamsType, todolistsAPI} from "../../api/todolists-api";
import {Dispatch} from "redux";
import {setAppStatusAC} from "../../app/app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";
import {addTaskAC} from "../TodolistsList/tasks-reducer";


const initialState = {
    isLoggedIn: false
}

type InitialStateType = typeof initialState
type ActionsType = ReturnType<typeof setIsLoggedInAC>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch(action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {
                ...state, isLoggedIn: action.value
            }
    }
}

export const setIsLoggedInAC = (value: boolean) => {
    return {
        type: 'LOGIN/SET-IS-LOGGED-IN', value
    } as const
}

export const setIsLoggedInTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsAPI.createTask(todolistId, title)
        .then(res => {
            if (res.data.resultCode === 0) {
                const task = res.data.data.item
                const action = addTaskAC(task)
                dispatch(setIsLoggedInAC(true))
            } else {
                handleServerAppError(res.data, dispatch);
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })

}