export function roundTwoDecimals(number) {
    return Math.floor(number * 100) / 100
}

export function randomIntBetween(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError('min and max must be finite numbers')
    }

    if (Math.floor(min) !== min || Math.floor(max) !== max) {
        min = Math.ceil(min)
        max = Math.floor(max)
    }

    if (max < min) {
        [min, max] = [max, min]
    }

    return Math.floor(Math.random() * (max - min + 1)) + min
}


export function randomFloatBetween(min, max) {
    if (!Number.isFinite(min) || !Number.isFinite(max)) {
        throw new TypeError('min and max must be finite numbers')
    }

    if (max < min) {
        [min, max] = [max, min]
    }

    return roundTwoDecimals(Math.random() * (max - min) + min)
}

export function calculateOrder(order, taxPercent) {
    const updatedItems = order.items.map(item => {
        const netTotal = roundTwoDecimals(item.netPrice * item.quantity)
        const total = roundTwoDecimals(netTotal * (1 + (taxPercent / 100)))

        return {
            ...item,
            netTotal,
            total
        }
    })

    const netTotal = roundTwoDecimals(updatedItems.reduce((sum, i) => sum + i.netTotal, 0))
    const total = roundTwoDecimals(updatedItems.reduce((sum, i) => sum + i.total, 0))
    const tax = roundTwoDecimals(total - netTotal)

    return {
        netTotal,
        tax,
        total,
        items: updatedItems,
    }
}


