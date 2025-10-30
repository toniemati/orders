export default class Order {
    netTotal = null
    tax = null
    total = null
    items = null

    constructor(netTotal, tax, total, items) {
        this.netTotal = netTotal
        this.tax = tax
        this.total = total
        this.items = items
    }
}