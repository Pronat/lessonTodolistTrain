import {TaskType} from "../Todolist";

export const todolistReducer = (state:Array<TaskType>, action:todolistReducerType) => {
  switch (action.type) {
      case "REMOVE-TASK": {
          // let filteredTasks = tasks.filter(t => t.id != id);
          return state.filter(t => t.id != action.payload.id)
      }
      case "ADD-TASK": {
          return state.
      }
      default: return state
  }
}

type todolistReducerType = removeTaskACType | addTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
   return{
       type: "REMOVE-TASK",
       payload: {id}
   } as const
}

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string) => {
    return{
        type: "ADD-TASK",
        payload: {title}
    } as const
}