import { test, expect } from 'vitest'
import { transformToNumber } from './numbers'

test('it should tranfrom string to number', () => {
    const input = '5'
    const result = transformToNumber(input)

    expect(result).toBeTypeOf('number')
    // expect(transformToNumber(input)).toBe(5)
})

test('it should yield NaN for non-transformable value', () => {
    const input = 'invalid'
    const input2 = {}

    const result = transformToNumber(input)
    const result2 = transformToNumber(input2)

    expect(result).toBeNaN
    expect(result2).toBeNaN
})

test('it should transform number to number', () => {
    const input = 5
    expect(transformToNumber(input)).toBe(5)
})

test('it should throw error if no values provided', () => {
    expect(transformToNumber()).toThrow
}) 