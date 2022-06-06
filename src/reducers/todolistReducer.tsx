import {TaskType} from "../Todolist";

export const todolistReducer = (state:Array<TaskType>, action:any)=> {
    switch (action.type) {
        case'XXX':{
            return state
        }
        default: return state
    }
}

export const removeTaskAC = (id:string) => {
    return{
        type: "REMOVE-TASK",
        payload:{id}
    }  as const
}