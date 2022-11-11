import {AppActionsType, setAppErrorAC, setAppStatusAC} from "../features/TodolistsList/app-reducer";
import {Dispatch} from "redux";

export const handleNetworkError = (dispatch: Dispatch<AppActionsType>, message: string) => {
    dispatch(setAppErrorAC(message))
    dispatch(setAppStatusAC('failed'))
}