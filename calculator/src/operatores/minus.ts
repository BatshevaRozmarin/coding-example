import { Operator } from "./operator";
export class Subtraction extends Operator {
    
    minus(): number {
        return this.num1 - this.num2 ;
    }
}

