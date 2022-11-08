import {ActionsAppType, setAppErrorAC, setAppStatusAC} from "../features/TodolistsList/app-reducer";
import {Dispatch} from "redux";
import {ResponseType} from "../api/todolists-api";

export const handlwNetworkError = (dispatch: Dispatch<ActionsAppType>, message: string) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppErrorAC(message))
}

export const handleAppError = <T>(dispatch: Dispatch<ActionsAppType>, data: ResponseType<T>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    }   else {
        dispatch(setAppErrorAC('Some error occured'))
    }
}