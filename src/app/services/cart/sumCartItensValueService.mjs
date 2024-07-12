export default (cart) => cart.items.reduce((acc, item) => {
    return acc + item.price * item.quantity
}, 0)
