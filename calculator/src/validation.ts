import { CompleteExercise } from "./completeExercise";

export class Validate {
    exercise: string
    constructor(exercise: string) {
        this.exercise = exercise
    }
    hasConsecutiveOperators(): boolean {
        const consecutiveOperatorsRegex = /[+\*/]{2,}/;
        return consecutiveOperatorsRegex.test(this.exercise);

    }
    removeSpace() {
        this.exercise = this.exercise.replace(" ", "");
    }
    hasCharacters(): boolean {
        const regex = /^[\d+\-*./]+$/;
        return !regex.test(this.exercise);
    }
    StartOperator(): boolean {
        const operatorRegex = /^[+\*/]/;
        return operatorRegex.test(this.exercise.charAt(0));
    }
    EndOperator(): boolean {
        const operatorRegex = /^[+\-*/]/;
        return operatorRegex.test(this.exercise.charAt(this.exercise.length - 1));
    }
    hasDecimalWithNumbers(): boolean {
        if (this.exercise.includes('.')){
        const regex = /\d+\.\d+/;
        return !regex.test(this.exercise);}
        return false
    }
    isValidExpression() {
        this.removeSpace()
        if (this.exercise.length === 0) {
            throw new Error("Cannot be empty string")
        }
        if (this.hasCharacters()) {
            throw new Error("Syntax Error:Cannot has Characters")
        }
        if (this.EndOperator()) {
            throw new Error("Syntax Error:Cannot End with operator")

        }
        if (this.StartOperator()) {
            throw new Error("Syntax Error:Cannot start with operator")

        }
        if (this.hasDecimalWithNumbers()) {
            throw new Error("Syntax Error:Cannot has decimal without numbers")

        }
        if (this.hasConsecutiveOperators()) {
            throw new Error("Syntax Error:Cannot has consecutive operators")

        }
        else {
            const isValid = new CompleteExercise(this.exercise)
            const result = isValid.calculate()
            return result
        }
    }
}

