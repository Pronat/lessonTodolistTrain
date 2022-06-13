import {sub, sum} from "./tasks";


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