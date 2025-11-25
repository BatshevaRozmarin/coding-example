import { Validate } from '../src/validation';

describe('Valide', () => {
    test('should return correctly result about invalid exercise', () => {
        const valid = new Validate('1+2*3/4');
        expect(valid.isValidExpression()).toEqual(2.5);
    });
    test('should throw syntax error about exercise with consecutive operators', () => {
        const valid = new Validate('-5*+2');
        expect(() => valid.isValidExpression()).toThrow("Syntax Error:Cannot has consecutive operators");
    });
    test('should throw syntax error about exercise with start on operator', () => {
        const valid = new Validate('/1+-2*3');
        expect(() => valid.isValidExpression()).toThrow("Syntax Error:Cannot start with operator");
    });
    test('should throw syntax error about exercise with end on operator', () => {
        const valid = new Validate('1*-2/3--4-');
        expect(() => valid.isValidExpression()).toThrow("Syntax Error:Cannot End with operator");
    });
    test('should throw syntax error about empty exercise', () => {
        const valid = new Validate(' ');
        expect(() => valid.isValidExpression()).toThrow("Cannot be empty string");
    });
    test('should throw syntax error about exercise with chars', () => {
        const valid = new Validate('-5-!-10');
        expect(() => valid.isValidExpression()).toThrow("Syntax Error:Cannot has Characters");
    });
    test('should throw syntax error about exercise with point without numbers', () => {
        const valid = new Validate('-5-.10');
        expect(() => valid.isValidExpression()).toThrow("Syntax Error:Cannot has decimal without numbers");
    });
});

