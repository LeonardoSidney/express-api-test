import CartOperation from '../../../../app/operations/cart/CartOperation.mjs'

class CartController {
    async createCart (request, response) {
        const { body } = request
        const cartOperation = new CartOperation()
        const cart = await cartOperation.createCart(body)
        return response.status(201).json(cart)
    }
}

export default CartController