export default (item, cart) => {
    console.log('CartOperation:: AddItem :: AddItemToCartService :: ', item)
    if (cart.items.length === 0) {
        item.quantity = 1
        cart.items = [item]
        cart.total = item.price
        return cart
    }

    const itemIndex = cart.items.findIndex(cartItem => cartItem.productId === item.productId)
    if (itemIndex === -1) {
        item.quantity = 1
        cart.items.push(item)
        cart.total += item.price
        return cart
    }

    cart.items[itemIndex].quantity += 1
    cart.total += item.price

    return cart
}