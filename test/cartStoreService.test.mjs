import { expect } from "chai"
import cartStoreService from "../src/app/services/cart/cartStoreService.mjs"
import Sinon from "sinon"
import CartModel from "../src/infra/databases/mongodb/models/cartModel.mjs"

describe('CartStoreService', () => {
    let cartModelStub = null

    beforeEach(() => {
        cartModelStub = Sinon.stub(CartModel, 'create')
    })

    afterEach(() => {
        cartModelStub.restore()
    })

    it('should store cart', async () => {
        const cart = {
            id: 'id-meramente-randomico',
            sessionId: 'sessao-meramente-randomica',
            items: [],
            total: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        cartModelStub.resolves(cart)
        const storedCart = await cartStoreService(cart)
    
        expect(storedCart.items.length).to.equal(0)
        expect(cartModelStub.calledOnce).to.be.true
        expect(cartModelStub.calledWith(cart)).to.be.true
    })

    it('should store cart with items', async () => {
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
        const storedCart = await cartStoreService(cart)

        expect(storedCart.items.length).to.equal(1)
        expect(storedCart.items[0].productId).to.equal('id-totalmente-aleatorio')
        expect(storedCart.items[0].quantity).to.equal(1)
        expect(cartModelStub.calledOnce).to.be.true
        expect(cartModelStub.calledWith(cart)).to.be.true
    })
})