import { SmallExercise } from "./smallExercise"

export class CompleteExercise {
    exercise: string
    constructor(exercise: string) {
        this.exercise = exercise
    }
    parseExpression(): string[] {
        try {
            const result: string[] = [];
            const regex = /((?<=[+\-*/]|^)-\d+\.?\d*)|(\d+\.?\d*)|([+\-*/])/g;
            let match: RegExpExecArray | null;

            while ((match = regex.exec(this.exercise)) !== null) {
                result.push(...match.slice(1).filter(Boolean));
            }
            return result;
        }
        catch (error: any) {
            throw error.message
        }
    }
    sendSmallExercise(num1: number, num2: number, op: string): number {
        const smallExercise = new SmallExercise(num1, num2, op)
        return smallExercise.checkOp();
    }
    updateExercise(arr: string[], result: number, j: number): string[] {
        const stringResult = result.toString();
        arr.splice(j - 1, 3, stringResult);
        return arr;
    }
    calculate(): number {
        let result: number = 0
        let numbersArray = this.parseExpression()
        const opArr = ['*', '/', '+', '-']
        for (let i = 0; i < opArr.length - 1; i += 2) {
            for (let j = 1; j < numbersArray.length - 1; j++) {
                if (opArr[i] === numbersArray[j] || opArr[i + 1] === numbersArray[j]) {
                    try {
                        result = this.sendSmallExercise(parseFloat(numbersArray[j - 1]), parseFloat(numbersArray[j + 1]), numbersArray[j]);
                        numbersArray = this.updateExercise(numbersArray, result, j);
                        j -= 1
                    }
                    catch (error: any) {
                        throw error.message
                    }
                }
            }
        }
        return result;
    }
}
