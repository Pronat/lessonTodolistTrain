import {AppActionsType, setAppErrorAC, setAppStatusAC} from "../features/TodolistsList/app-reducer";
import {Dispatch} from "redux";

export const handleNetworkError = (dispatch: Dispatch<AppActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}

export const handleServerAppError = (dispatch: Dispatch<AppActionsType>, data: any) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
        dispatch(setAppStatusAC('idle'))
    }   else {
        dispatch(setAppErrorAC("some other error"))
        dispatch(setAppStatusAC('idle'))
    }
}