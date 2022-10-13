import { it, test, expect, describe } from 'vitest'
import { validateStringNotEmpty, validateNumber } from './validation'

// test using suite (describe function)
describe('validateStringNotEmpty()', () => {
    test('it should throw error if no value provided', () => {
        const input = ''

        const resultFn = () => { validateStringNotEmpty(input) }

        expect(resultFn).toThrow
    })

    test('it should throw error if spaces without any letter is provided', () => {
        const input = '     '

        const resultFn = () => { validateStringNotEmpty(input) }

        expect(resultFn).toThrow()
    })

    test('it should throw error if types other than String are provided', () => {
        const input1 = 2
        const input2 = []
        const input3 = {}

        const resultFn1 = () => { validateStringNotEmpty(input1) }
        const resultFn2 = () => { validateStringNotEmpty(input2) }
        const resultFn3 = () => { validateStringNotEmpty(input3) }

        expect(resultFn1).toThrow()
        expect(resultFn2).toThrow()
        expect(resultFn3).toThrow()
    })

    test('it should NOT thorw error if non-empty string is provided', () => {
        const input = 'valid'

        const resultFn = () => { validateStringNotEmpty(input) }

        expect(resultFn).not.toThrow()
    })
})

describe('validateNumber()', () => {
    it('should NOT throw error if number is provided', () => {
        const input = 1
        const resultFn = () => { validateNumber(input) }

        expect(resultFn).not.toThrow()
    })

    it('should throw error if types other than Number is provided', () => {
        const input1 = '1'
        const input2 = []
        const input3 = {}
        const input4 = NaN

        const resultFn1 = () => { validateNumber(input1) }
        const resultFn2 = () => { validateNumber(input2) }
        const resultFn3 = () => { validateNumber(input3) }
        const resultFn4 = () => { validateNumber(input4) }

        expect(resultFn1).toThrow()
        expect(resultFn2).toThrow()
        expect(resultFn3).toThrow()
        expect(resultFn4).toThrow()
    })
})