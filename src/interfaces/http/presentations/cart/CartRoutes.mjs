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
    },
    {
        method: 'put',
        route: '/cart/:id/add-item',
        handler: cartController.addItem,
        validate: cartSchema.addItemSchema,
        middlewares: []
    },
    {
        method: 'put',
        route: '/cart/:id/remove-item',
        handler: cartController.removeItem,
        validate: cartSchema.removeItemSchema,
        middlewares: []
    },
]