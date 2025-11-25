import { Subtraction } from '../../src/operatores/minus';

describe('MinusOperator', () => {
  test('should return the correct difference for positive numbers', () => {
    const minus = new Subtraction(10, 5);
    expect(minus.minus()).toBe(5);
  });
  test('should return a negative difference when the second number is larger', () => {
    const minus = new Subtraction(5,10);
    expect(minus.minus()).toBe(-5);
  });
  test('should return zero when both numbers are the same', () => {
    const minus = new Subtraction(7, 7);
    expect(minus.minus()).toBe(0);
  });
  test('should handle negative numbers correctly', () => {
    const minus = new Subtraction(-5, -10);
    expect((minus).minus()).toBe(5); 
  });
  test('should handle mixed positive and negative numbers', () => {
    const minus = new Subtraction(10, -5);
    expect((minus).minus()).toBe(15); 
  });
});
