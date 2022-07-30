import {combineReducers, createStore, legacy_createStore} from "redux";
import {tasksReducer} from "./tasks-reducer";
import {todolistsReducer} from "./todolists-reducer";

// const rootReducer = combineReducers({
//     tasks: tasksReducer,
//     todolists: todolistsReducer
// })
//
// export const store = legacy_createStore(rootReducer)
//
// export type AppRootStateType = ReturnType<typeof rootReducer>
//
// // @ts-ignore
// window.store = store

const rootStore = combineReducers({
    todolists: todolistsReducer,
    tasks: tasksReducer
})

export const store = legacy_createStore(rootStore)

export type AppRootStateType = ReturnType<typeof  rootStore>
// @ts-ignore
window.store = store