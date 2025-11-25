import { DivisionOperator } from '../../src/operatores/division';

describe('divide', () => {
  test('should correctly divide two positive numbers', () => {
    const division = new DivisionOperator(10, 2);
    expect(division.divide()).toBe(5);
  });
  test('should return a float for non-integer division', () => {
    const division = new DivisionOperator(7, 2);
    expect(division.divide()).toBe(3.5);
  });
  test('should throw an error when dividing by zero', () => {
    const division = new DivisionOperator(10, 0);
    expect(() => division.divide()).toThrow("Division by zero is not allowed.");
  });
  test('should handle large numbers', () => {
    const division = new DivisionOperator(1000000, 100);
    expect(division.divide()).toBe(10000);
  });
  test('should handle negative numbers correctly', () => {
    const division = new DivisionOperator(-30, -2);
    expect((division).divide()).toBe(15);
  });
  test('should handle mixed positive and negative numbers', () => {
    const division = new DivisionOperator(50,-5);
    expect((division).divide()).toBe(-10);
  });
});

