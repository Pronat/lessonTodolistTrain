
export const sum = (salary: number, n: number) => salary + n
export const sub = (salary: number, n: number) => salary - n
export const div = (salary: number, n: number) => salary / n
export const mult = (salary: number, n: number) => salary * n

type ActionType = {
    type: "SUM",
    n: number
}

export const salaryReducer = (salary:number, action: ActionType) => {

}