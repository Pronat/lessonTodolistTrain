
type StateType = {
    age: number
    childrenCount: number
    name: string
}

type ActionType = {
  type: string
    [key:string]:any
}

export const userReducer = (state: StateType, action: any) => {
    switch (action.type) {
        case 'Ver 1':

        case 'Ver 2':

        default:
            throw new Error('I dont understand this action type')
    }
}