import {TaskType} from "../Todolist";

export const todolistReducer = (state:Array<TaskType>, action:todolistReducerType)=> {
    switch (action.type) {
        case "REMOVE-TASK":
        default: return state
    }
}

type todolistReducerType = removeTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id:string) => {
    return{
        type: "REMOVE-TASK",
        payload:{id}
    }  as const
}