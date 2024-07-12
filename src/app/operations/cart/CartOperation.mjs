import Logger from '../../../../vendor/helpers/logs/Logger.mjs'
import findItemCatalogService from '../../services/cart/findItemCatalogService.mjs'
import createCartMapperService from '../../services/cart/createCartMapperService.mjs'
import createCartService from '../../services/cart/createCartService.mjs'
import cartStoreService from '../../services/cart/cartStoreService.mjs'
import findCartService from '../../services/cart/findCartService.mjs'
import addItemToCartService from '../../services/cart/addItemToCartService.mjs'
import cartUpdateService from '../../services/cart/cartUpdateService.mjs'
import sumCartItensValueService from '../../services/cart/sumCartItensValueService.mjs'
import removeItemFromCartService from '../../services/cart/removeItemFromCartService.mjs'

class CartOperation {
    async createCart (body) {
        Logger.info('CartOperation :: createCart :: ', body)
        const mappedBody = createCartMapperService(body)
        const cart = createCartService(mappedBody)
        await cartStoreService(cart)
        return cart
    }
    async addItem (id, body) {
        Logger.info('CartOperation :: addItem :: ', id, body)
        let cart = await findCartService(id)
        if (!cart) {
            return { message: 'Cart not found' }
        }

        const item = await findItemCatalogService(body)
        if (!item) {
            return { message: 'Item not found' }
        }

        cart = addItemToCartService(item, cart)
        
        cart.total = sumCartItensValueService(cart)

        await cartUpdateService(cart)

        return cart
    }
    async removeItem (id, body) {
        Logger.info('CartOperation :: removeItem :: ', id, body)
        let cart = await findCartService(id)
        if (!cart) {
            return { message: 'Cart not found' }
        }

        const item = await findItemCatalogService(body)
        if (!item) {
            return { message: 'Item not found' }
        }

        cart = removeItemFromCartService(item, cart)
        
        cart.total = sumCartItensValueService(cart)

        await cartUpdateService(cart)

        return cart
    }
}

export default CartOperation