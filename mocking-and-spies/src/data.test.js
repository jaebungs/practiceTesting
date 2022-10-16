import { describe, it, expect, vi } from 'vitest'
import { generateReportData } from './data'

// spy function to check if a function fires
describe('generateReportData()', () => {
    it('should excute logFn if provided', () => {
        const logger = vi.fn() // creates an empty function and keep tracks

        generateReportData(logger);
    
        expect(logger).toBeCalled()
    })
})