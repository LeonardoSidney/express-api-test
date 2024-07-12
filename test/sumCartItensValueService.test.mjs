import { expect } from "chai"
import sumCartItensValueService from "../src/app/services/cart/sumCartItensValueService.mjs"

describe('SumCartItensValueService', () => {
    it('should sum cart items value', () => {
        const cart = {
            id: 'id-meramente-randomico',
            sessionId: 'sessao-meramente-randomica',
            items: [{
                productId: 'id-totalmente-aleatorio',
                name: 'nome-completamente-aleatorio',
                price: 100,
                quantity: 2
            }, {
                productId: 'id-totalmente-aleatorio-2',
                name: 'nome-completamente-aleatorio-2',
                price: 200,
                quantity: 3
            }],
            total: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        const cartValue = sumCartItensValueService(cart)
        expect(cartValue).to.equal(800)
    })
})