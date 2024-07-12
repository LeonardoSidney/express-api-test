import CartOperation from '../../../../app/operations/cart/CartOperation.mjs'

class CartController {
    async createCart (request, response) {
        const { body } = request
        const cartOperation = new CartOperation()
        const cart = await cartOperation.createCart(body)
        return response.status(201).json(cart)
    }
    async addItem (request, response) {
        const { body } = request
        const { id } = request.params
        const cartOperation = new CartOperation()
        const cart = await cartOperation.addItem(id, body)
        return response.status(200).json(cart)
    }
    async removeItem (request, response) {
        const { body } = request
        const { id } = request.params
        const cartOperation = new CartOperation()
        const cart = await cartOperation.removeItem(id, body)
        return response.status(200).json(cart)
    }
}

export default CartController