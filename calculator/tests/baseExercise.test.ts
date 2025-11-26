import { BaseExercise } from '../src/baseExercise';


describe('smallExercise', () => {

    test('should correctly add two numbers', () => {
        const exercise = new BaseExercise(5, 3, '+');
        expect(exercise.CalculationByOperator()).toBe(8);
    });
    test('should correctly subtract two numbers', () => {
        const exercise = new BaseExercise(10, 4, '-');
        expect(exercise.CalculationByOperator()).toBe(6);
    });
    test('should correctly multiply two numbers', () => {
        const exercise = new BaseExercise(6, 7, '*');
        expect(exercise.CalculationByOperator()).toBe(42);
    });
    test('should correctly divide two numbers', () => {
        const exercise = new BaseExercise(10, 2, '/');
        expect(exercise.CalculationByOperator()).toBe(5);
    });
    test('should throw an error for division by zero', () => {
        const exercise = new BaseExercise(10, 0, '/');
        expect(() => exercise.CalculationByOperator()).toThrow("Division by zero is not allowed.");
    });

    test('should throw an error for an unsupported operator', () => {
        const exercise = new BaseExercise(5, 3, '%');
        expect(() => exercise.CalculationByOperator()).toThrow("Unsupported operator: %");
    });
});
