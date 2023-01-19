

const initialState = {
    isLoggedIn: false
}

type InitialStateType = typeof initialState
type ActionsType = any

export const authReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch(action.type) {
        case '1':
            return {
                ...state, isLoggedIn: action.isLoggedIn
            }
    }
}