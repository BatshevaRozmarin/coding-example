import { CompleteExercise } from '../src/completeExercise';

describe('ExpressionParser', () => {
    test('should correctly parse an expression with positive numbers and operators', () => {
        const parser = new CompleteExercise('1+2*3/4');
        expect(parser.parseExpression()).toEqual(['1', '+', '2', '*', '3', '/', '4']);
        expect(parser.calculate()).toEqual(2.5);

    });

    test('should correctly parse an expression with negative numbers at the beginning', () => {
        const parser = new CompleteExercise('-5+2');
        expect(parser.parseExpression()).toEqual(['-5', '+', '2']);
        expect(parser.calculate()).toEqual(-3);

    });

    test('should correctly parse an expression with a negative number after an operator', () => {
        const parser = new CompleteExercise('1+-2*3');
        expect(parser.parseExpression()).toEqual(['1', '+', '-2', '*', '3']);
        expect(parser.calculate()).toEqual(-5);

    });

    test('should correctly parse an expression with multiple negative numbers after operators', () => {
        const parser = new CompleteExercise('1*-2/3--4');
        expect(parser.parseExpression()).toEqual(['1', '*', '-2', '/', '3', '-', '-4']);
        expect(parser.calculate()).toEqual(3.3333333333333335);

    });
    test('should handle decimals and mixed operations', () => {
        const parser = new CompleteExercise('1.5+-2.2*3.0/-4.1');
        expect(parser.parseExpression()).toEqual(['1.5', '+', '-2.2', '*', '3.0', '/', '-4.1']);
        expect(parser.calculate()).toEqual(3.109756097560976);

    });
    test('should handle decimals and mixed operations', () => {
        const parser = new CompleteExercise('-5--10');
        expect(parser.parseExpression()).toEqual(['-5', '-', '-10']);
        expect(parser.calculate()).toEqual(5);
    });
});
