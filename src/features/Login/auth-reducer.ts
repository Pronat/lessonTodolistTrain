import {authAPI, LoginParamsType, todolistsAPI} from "../../api/todolists-api";
import {Dispatch} from "redux";
import {SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from "../../app/app-reducer";
import {handleServerAppError, handleServerNetworkError} from "../../utils/error-utils";
import {useAppDispatch} from "../../app/store";



const initialState = {
    isLoggedIn: false
}

type InitialStateType = typeof initialState
type ActionsType =
    ReturnType<typeof setIsLoggedInAC>
    | ReturnType<typeof meAC>
    | SetAppStatusActionType
    | SetAppErrorActionType

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType   => {
    switch(action.type) {
        case 'LOGIN/SET-IS-LOGGED-IN':
            return {
                ...state, isLoggedIn: action.value
            }
        case "LOGIN/ME-STATUS":
            return {
                ...state
            }
        default:
            return state
    }
}

export const setIsLoggedInAC = (value: boolean) => {
    return {
        type: 'LOGIN/SET-IS-LOGGED-IN', value
    } as const
}

export const meAC = () => {
    return {
        type: 'LOGIN/ME-STATUS'
    } as const
}

export const setIsLoggedInTC = (data: LoginParamsType) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.login(data)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(true))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch);
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
}

export const meTC = () => (dispatch: Dispatch) => {

}