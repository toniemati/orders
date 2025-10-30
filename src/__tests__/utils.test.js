import { randomIntBetween, randomFloatBetween } from '../utils.js'

describe('randomIntBetween', () => {
    test('returns value in range', () => {
        for (let i = 0; i < 100; i++) {
            const val = randomIntBetween(3, 7)

            expect(val).toBeGreaterThanOrEqual(3)
            expect(val).toBeLessThanOrEqual(7)

            expect(Number.isInteger(val)).toBe(true)
        }
    })

    test('works with min > max', () => {
        const val = randomIntBetween(10, 5)

        expect(val).toBeGreaterThanOrEqual(5)
        expect(val).toBeLessThanOrEqual(10)
    })

    test('handles non integer values', () => {
        const val = randomIntBetween(1.2, 2.8)

        expect(val).toBe(2)
    })
})

describe('randomFloatBetween', () => {
    test('returns value in range with two decimals', () => {
        for (let i = 0; i < 100; i++) {
            const val = randomFloatBetween(1.11, 5.22)

            expect(val).toBeGreaterThanOrEqual(1.11)
            expect(val).toBeLessThanOrEqual(5.55)

            expect(Math.round(val * 100)).toBeCloseTo(val * 100, 10)
        }
    })

    test('works with min > max', () => {
        const val = randomFloatBetween(5.5, 2.2)

        expect(val).toBeGreaterThanOrEqual(2.2)
        expect(val).toBeLessThanOrEqual(5.5)
    })

    test('always two decimal precision', () => {
        const val = randomFloatBetween(3, 5)

        expect(val).toBeGreaterThanOrEqual(3)
        expect(val).toBeLessThanOrEqual(5)

        expect(Number.isInteger(Math.round(val * 100))).toBe(true)
    })
})


