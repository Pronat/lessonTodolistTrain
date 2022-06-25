type StateType = {
    age: number
    childrenCount: number
    name: string
}
type ActionType = {
    [key: string]: any
}
export const userReducer = (state: StateType, action: ActionType) => {
   switch (action.type) {
       case 'INCREMENT-AGE':
           return state.age + 1
       case 'INCREMENT-CHOLDREN-COUNT':
           return state.childrenCount + 1
       default:
           throw new Error("We don't understand this type")
}
}