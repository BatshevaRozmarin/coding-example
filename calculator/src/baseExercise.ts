import { DivisionOperator } from "./operatores/division"
import { Subtraction } from "./operatores/minus"
import { Multiplication } from "./operatores/multiplication"
import { Addition } from "./operatores/plus"


export class BaseExercise {
    num1: number
    num2: number
    op: string
    constructor(num1: number, num2: number, op: string) {
        this.num1 = num1
        this.num2 = num2
        this.op = op
    }
    CalculationByOperator() {
        switch (this.op) {
            case "+":
                const plus = new Addition(this.num1, this.num2);
                return plus.add();
            case "-":
                const minus = new Subtraction(this.num1, this.num2);
                return minus.minus();
            case "*":
                const multiply = new Multiplication(this.num1, this.num2);
                return multiply.multiply();
            case "/":
                const division = new DivisionOperator(this.num1, this.num2);
                return division.divide();
            default:
                throw new Error(`Unsupported operator: ${this.op}`);
        }
    }
}
