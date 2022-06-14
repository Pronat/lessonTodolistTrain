import {ActionType, div, mult, salaryReducer, StateType, sub, sum} from "./tasks";


test("Test of sum", () => {
    // 1. Тестовые данные
    const salary: number = 800
    const n: number = 200
    // 2. Выполнение тестируемого кода:
    const result = sum(salary, n)
    // 3. Проверка результата
    expect(result).toBe(1000)
})

test("Sub with n", () => {
    const salary:number = 1700
    const n:number = 200
    const result = sub(salary, n)
    expect(result).toBe(1500)
})

test("result of div", () => {
    const salary:number = 500
    const n:number = 2
    const result = div(salary, n)
    expect(result).toBe(250)
})

test("multiply numbers", () => {
    // const salary:number = 300
    // const n:number = 2
    // const result = mult(salary, n)
    expect(mult(300,2)).toBe(600)
    expect(mult(0,2)).toBe(0)
    expect(mult(100,5)).toBe(500)
})

test("case SUM of salaryReducer test", () => {
    const salary: StateType = 800
    const action: ActionType = {
        type: "SUM",
        n: 200
    }
    const testAction: ActionType = {
        type: "TEST",
        n: 200
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(1000)
    expect(salaryReducer(salary, testAction)).toBe(800)
    expect(salaryReducer(salary, action)).toBe(1000)
})

test("SUB of the salary reducer", () => {
    const salary: StateType = 500
    const action: ActionType = {
        type: "SUB",
        n: 100
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(400)
})

test("DIV of salaryReducer", () => {
    const state: StateType = 1200
    const action: ActionType = {
        type: "DIV",
        n: 100,
    }
    const result = salaryReducer(state, action)
    expect(result).toBe(12)
})

test("MULT of salaryReducer", () => {
    const salary: StateType = 5000
    const action: ActionType = {
        type: "MULT",
        n: 25
    }
    const testAction:ActionType = {
        type: "TEST",
        n: 25
    }
    const result = salaryReducer(salary, action)
    expect(result).toBe(125000)
    expect(salaryReducer(salary, testAction)).toBe(5000)

})