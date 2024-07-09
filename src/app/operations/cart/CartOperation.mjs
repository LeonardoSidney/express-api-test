import Logger from '../../../../vendor/helpers/logs/Logger.mjs'
import createCartMapperService from '../../services/Cart/createCartMapperService.mjs'
import createCartService from '../../services/Cart/createCartService.mjs'
import cartStoreService from '../../services/Cart/cartStoreService.mjs'

class CartOperation {
    async createCart (body) {
        Logger.info('CartOperation :: createCart :: ', body)
        const mappedBody = createCartMapperService(body)
        const cart = createCartService(mappedBody)
        await cartStoreService(cart)

        return cart
    }
}

export default CartOperation