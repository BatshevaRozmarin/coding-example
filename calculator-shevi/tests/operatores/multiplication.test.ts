import { Multiplication } from '../../src/operatores/multiplication';

describe('multiply', () => {
    test('should return the correct multiplication of two positive numbers', () => {
        const multiply = new Multiplication(2, 3)
        expect(multiply.multiply()).toBe(6);
    });
    test('should return the correct multiplication when one number is zero', () => {
        const multiply = new Multiplication(5, 0)
        expect(multiply.multiply()).toBe(0);
    });
    test('should handle floating-point numbers correctly', () => {
        const multiply = new Multiplication(0.5, 2)
        expect(multiply.multiply()).toBe(1);
    });
    test('should handle negative numbers correctly', () => {
        const multiply = new Multiplication(-10, -9)
        expect((multiply).multiply()).toBe(90);
    });
    test('should handle mixed positive and negative numbers', () => {
        const multiply = new Multiplication(10, -5);
        expect((multiply).multiply()).toBe(-50);
    });
});
