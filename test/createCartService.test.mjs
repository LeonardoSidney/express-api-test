import { expect } from "chai"
import createCartService from "../src/app/services/cart/createCartService.mjs"

describe('CreateCartService', () => {
    it('should create cart', () => {
        const cart = {
            sessionId: 'sessao-meramente-randomica'
        }

        const createdCart = createCartService(cart)
        expect(createdCart.id).to.be.a('string')
        expect(createdCart.sessionId).to.equal('sessao-meramente-randomica')
        expect(createdCart.items.length).to.equal(0)
        expect(createdCart.total).to.equal(0)
        expect(createdCart.createdAt).to.be.a('string')
        expect(createdCart.updatedAt).to.be.a('string')
    })
})