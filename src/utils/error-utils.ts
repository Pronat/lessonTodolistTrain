import {ActionsAppType, setAppErrorAC, setAppStatusAC} from "../features/TodolistsList/app-reducer";
import {Dispatch} from "redux";

export const handlwNetworkError = (dispatch: Dispatch<ActionsAppType>, message: string) => {
    dispatch(setAppStatusAC('failed'))
    dispatch(setAppErrorAC(message))
}