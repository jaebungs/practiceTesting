import { it, expect, describe, vi } from 'vitest'

import writeData from './io'

vi.mock('fs'); // path or module name in argument to replace empty module. fiileSystem from node.
// vi.mock() will only impact test, not Production.
// it automatically hoisted on vitest, not jest
vi.mock('path', () => {
    return {
        default: {
            join: (...args) => {
                return args[args.length - 1]
            }
        }
    }
})

it('should execute the writeFile method', () => {
    const testData = 'Test'
    const testFileName = 'test.txt'

    writeData(testData, testFileName)

    return expect(writeData(testData, testFileName)).resolves.toBeUndefined()

    // import fs, which is mocked module by vi.mock, conataning 
    // empty spy function
    // expect(fs.writeFile).toBeCalled()
    // expect(fs.writeFile).toBeCalledTimes(2) //to check how many times it called
    // expect(fs.writeFile).toBeCalledWith(testFileName, testData)
})

