import { SmallExercise } from '../src/smallExercise';

describe('smallExercise', () => {
    test('should correctly add two numbers', () => {
        const exercise = new SmallExercise(5, 3, '+');
        expect(exercise.checkOp()).toBe(8);
    });
    test('should correctly subtract two numbers', () => {
        const exercise = new SmallExercise(10, 4, '-');
        expect(exercise.checkOp()).toBe(6);
    });
    test('should correctly multiply two numbers', () => {
        const exercise = new SmallExercise(6, 7, '*');
        expect(exercise.checkOp()).toBe(42);
    });
    test('should correctly divide two numbers', () => {
        const exercise = new SmallExercise(10, 2, '/');
        expect(exercise.checkOp()).toBe(5);
    });
    test('should throw an error for division by zero', () => {
        const exercise = new SmallExercise(10, 0, '/');
        expect(() => exercise.checkOp()).toThrow("Division by zero is not allowed.");
    });

    test('should throw an error for an unsupported operator', () => {
        const exercise = new SmallExercise(5, 3, '%');
        expect(() => exercise.checkOp()).toThrow("Unsupported operator: %");
    });
});
