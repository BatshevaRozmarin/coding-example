import { Addition } from '../../src/operatores/plus';

describe('plusOperator', () => {
  test('should correctly add two positive numbers', () => {
    const plus = new Addition(5, 3);
    expect(plus.add()).toBe(8);
  });
  test('should handle zero correctly', () => {
    const plus = new Addition(0, 5);
    expect(plus.add()).toBe(5);
  });
  test('should handle floating-point numbers', () => {
    const plus = new Addition(2.1, 3.5);
    expect(plus.add()).toBe(5.6);
  });
  test('should handle negative numbers correctly', () => {
    const plus = new Addition(-12, -3);
    expect((plus).add()).toBe(-15);
  });
  test('should handle mixed positive and negative numbers', () => {
    const plus = new Addition(-7, 3.5);
    expect((plus).add()).toBe(-3.5);
  });
});
