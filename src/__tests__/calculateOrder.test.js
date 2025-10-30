import { calculateOrder, roundTwoDecimals } from '../utils.js'

describe('calculateOrder', () => {
    test('computes order and items with two decimal places', () => {
        const order = {
            items: [
                { netPrice: 10.23, quantity: 2 },
                { netPrice: 5.0, quantity: 3 },
            ],
        }

        const result = calculateOrder(order, 23)

        expect(result.netTotal).toBe(35.46)
        expect(result.total).toBe(43.61)
        expect(result.items).toHaveLength(2)
        expect(result.items[0].netTotal).toBe(20.46)
        expect(result.items[1].netTotal).toBe(15.0)
        expect(result.items[0].total).toBe(25.16)
        expect(result.items[1].total).toBe(18.45)
        expect(result.tax).toBe(roundTwoDecimals(result.total - result.netTotal))
    })

    test('handles zero and 100% tax', () => {
        const base = { items: [{ netPrice: 12.34, quantity: 1 }] }

        const zeroTax = calculateOrder(base, 0)

        expect(zeroTax.items[0].netTotal).toBe(12.34)
        expect(zeroTax.items[0].total).toBe(12.34)
        expect(zeroTax.netTotal).toBe(12.34)
        expect(zeroTax.total).toBe(12.34)
        expect(zeroTax.tax).toBe(0)

        const hundredTax = calculateOrder(base, 100)

        expect(hundredTax.items[0].netTotal).toBe(12.34)
        expect(hundredTax.items[0].total).toBe(24.68)
        expect(hundredTax.netTotal).toBe(12.34)
        expect(hundredTax.total).toBe(24.68)
        expect(hundredTax.tax).toBe(12.34)
    })
})


