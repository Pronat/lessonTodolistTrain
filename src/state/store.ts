import {combineReducers, legacy_createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";

const rootReducer = combineReducers({
    todlists: todolistsReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootReducer)

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store