import {ActionsAppType, setAppErrorAC, setAppStatusAC} from "../features/TodolistsList/app-reducer";
import {Dispatch} from "redux";

export const handlwNetworkError = (dispatch: Dispatch<ActionsAppType>, message: string) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppErrorAC(message))
}

export const handleAppError = (dispatch: any) => {
    if (res.data.messages.length) {
        dispatch(setAppErrorAC(res.data.messages[0]))
    }   else {
        dispatch(setAppErrorAC('Some error occured'))
    }
}