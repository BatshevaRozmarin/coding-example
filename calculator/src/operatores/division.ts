import { Operator } from "./operator";
export class DivisionOperator extends Operator {

    divide(): number {
        if (this.num2=== 0) {
            throw new Error("Division by zero is not allowed.");
          }
        return this.num1 / this.num2;
    }
}
