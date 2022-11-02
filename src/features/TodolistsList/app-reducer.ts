//app-reducer.tsx


export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    status: 'idle' as RequestStatusType
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        default:
            return state
    }
}

type ActionsType = any

export type setAppStatusAT = ReturnType<typeof setAppStatusAC>

export const setAppStatusAC = () => {
    return {
        type: 'APP/SET-STATUS',
    } as const
}