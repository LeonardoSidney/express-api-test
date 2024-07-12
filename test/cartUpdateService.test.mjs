import { expect } from "chai"
import cartUpdateService from "../src/app/services/cart/cartUpdateService.mjs"
import CartModel from "../src/infra/databases/mongodb/models/cartModel.mjs"
import Sinon from "sinon"

describe('CartUpdateService', () => {
    let cartModelStub = null
    beforeEach(() => {
        cartModelStub = Sinon.stub(CartModel, 'findOneAndUpdate')
    })

    afterEach(() => {
        cartModelStub.restore()
    })

    it('should update cart', async () => {
        const cart = {
            id: 'id-meramente-randomico',
            sessionId: 'sessao-meramente-randomica',
            items: [],
            total: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        cartModelStub.resolves(cart)

        const updatedCart = await cartUpdateService(cart)
        expect(updatedCart.items.length).to.equal(0)
        expect(cartModelStub.calledOnce).to.be.true
        expect(cartModelStub.calledWith({ id: cart.id }, cart)).to.be.true
    })
    it('should update cart with items', async () => {
        const cart = {
            id: 'id-meramente-randomico',
            sessionId: 'sessao-meramente-randomica',
            items: [{
                productId: 'id-totalmente-aleatorio',
                name: 'nome-completamente-aleatorio',
                price: 100,
                quantity: 1
            }],
            total: 100,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        cartModelStub.resolves(cart)

        const updatedCart = await cartUpdateService(cart)
        expect(updatedCart.items.length).to.equal(1)
        expect(updatedCart.items[0].productId).to.equal('id-totalmente-aleatorio')
        expect(updatedCart.items[0].quantity).to.equal(1)
        expect(cartModelStub.calledOnce).to.be.true
        expect(cartModelStub.calledWith({ id: cart.id }, cart)).to.be.true
    })
})