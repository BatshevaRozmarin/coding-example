import { Operator } from "./operator";
export class Addition extends Operator {

  add(): number {
    return this.num1 + this.num2;
  }
}
