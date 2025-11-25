import { Operator } from "./operator";
export class Multiplication extends Operator {

  multiply(): number {
    return this.num1 * this.num2;
  }
}

