export default class OrderItem {
    netPrice = null
    quantity = null
    netTotal = null
    total = null

    constructor(netPrice, quantity, netTotal, total) {
        this.netPrice = netPrice
        this.quantity = quantity
        this.netTotal = netTotal
        this.total = total
    }
}