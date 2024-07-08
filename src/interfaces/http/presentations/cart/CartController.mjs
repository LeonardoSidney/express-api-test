class CartController {
    async createCart (request, response) {
        const { body } = request
        return response.status(201).json(body)
    }
}

export default CartController