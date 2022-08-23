type StateType = {
    age: number;
    childrenCount: number;
    name: string;
}

type ActionType = {
    type: string
    [key: string]: any
}
export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT-AGE':
            let newState = {...state}
            newState.age = newState.age + 1
        case 'INCREMENT-CHILDREN-COUNT':
            let newState2 = {...state}

        default:
            throw new Error("I don't understand this type")
    }
}