export default (item, cart) => {
    console.log('CartOperation:: RemoveItem :: RemoveItemFromCartService :: ', item)

    const itemIndex = cart.items.findIndex(cartItem => cartItem.productId === item.productId)
    if (itemIndex === -1) {
        return cart
    }

    if (cart.items[itemIndex].quantity === 1) {
        cart.items.splice(itemIndex, 1)
        return cart
    }

    cart.items[itemIndex].quantity -= 1

    return cart
}