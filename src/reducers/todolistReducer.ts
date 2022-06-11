import {TaskType} from "../Todolist";

export const todolistReducer = (state:Array<TaskType>, action:todolistReducerType) => {
  switch (action.type) {
      case "REMOVE-TASK": {
          // let filteredTasks = tasks.filter(t => t.id != id);
          return state.filter(t => t.id != action.payload.id)
      }
      default: return state
  }
}

type todolistReducerType = removeTaskACType

type removeTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
   return{
       type: "REMOVE-TASK",
       payload: {id}
   } as const
}