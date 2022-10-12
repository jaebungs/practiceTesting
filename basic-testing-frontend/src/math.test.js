import { test, expect } from 'vitest';
// import test or it, they are the same
import { add } from './math'

test('it should add all numeric string values in an array', () => {
    // Arrange
    const number = ['1', '2', '3']
    
    // Act
    const result = add(number);

    // Assert
    const expectedResult = number.reduce((pre, curr) => +pre + +curr, 0)
    expect(result).toBe(expectedResult)
});

test('It should yield NaN if invalid number is provided', () => {
    const inputs = ['invalid', 5]

    const result = add(inputs)

    expect(result).toBeNaN()
})

test('should yield 0 if empty array is provided', () => {
    const inputs = []
    const result = add(inputs)

    expect(result).toBe(0)
})

test('should throw error if no values passed into the function', () => {
    const resultFn = () => {
        add()
    }

    expect(resultFn).toThrow()
    // expect(resultFn).not.toThrow()
})

test('it should throw error if provided with multiple arguments instead of an array', () => {
    // avoid add(1, 3, 5)
    const resultFn = () => {
        add(1, 4)
    }

    expect(resultFn).toThrow(/is not iterable/)
})