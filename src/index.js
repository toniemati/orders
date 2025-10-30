import Order from './models/order.js'
import OrderItem from './models/orderitem.js'
import { randomIntBetween, randomFloatBetween, calculateOrder } from './utils.js'

const MIN_NUM_OF_ORDERS = 5
const MAX_NUM_OF_ORDERS = 10
const MIN_NUM_OF_ITEMS = 2
const MAX_NUM_OF_ITEMS = 10
const TAX_PERCENT = 23

const numOfOrders = randomIntBetween(MIN_NUM_OF_ORDERS, MAX_NUM_OF_ORDERS)

const orders = []

for (let i = 0; i < numOfOrders; i++) {
    const items = []
    const numOfOrderItems = randomIntBetween(MIN_NUM_OF_ITEMS, MAX_NUM_OF_ITEMS)

    for (let j = 0; j < numOfOrderItems; j++) {
        const netPrice = randomFloatBetween(1, 99)
        const quantity = randomIntBetween(1, 10)

        const item = new OrderItem(netPrice, quantity, null, null)

        items.push(item)
    }

    const order = new Order(null, null, null, items)

    orders.push(order)
}

orders.forEach((o, i) => {
    orders[i] = calculateOrder(o, TAX_PERCENT)

    // console.log(`Order ${i + 1}`, orders[i])
})


