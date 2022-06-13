import {div, mult, sub, sum} from "./tasks";


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

