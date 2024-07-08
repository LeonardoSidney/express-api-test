import CartController from './CartController.mjs'
import cartSchema from './CartSchema.mjs'

const cartController = new CartController()

export default [
    {
        method: 'post',
        route: '/cart',
        handler: cartController.createCart,
        validate: cartSchema.createCartSchema,
        middlewares: []
    }
]