import Logger from '../../../../vendor/helpers/logs/Logger.mjs'
import findItemCatalogService from '../../services/Cart/findItemCatalogService.mjs'
import createCartMapperService from '../../services/Cart/createCartMapperService.mjs'
import createCartService from '../../services/Cart/createCartService.mjs'
import cartStoreService from '../../services/Cart/cartStoreService.mjs'
import findCartService from '../../services/Cart/findCartService.mjs'
import addItemToCartService from '../../services/Cart/addItemToCartService.mjs'
import cartUpdateService from '../../services/Cart/cartUpdateService.mjs'

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

        await cartUpdateService(cart)

        return cart
    }
}

export default CartOperation