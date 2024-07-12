import { expect } from "chai"
import removeItemFromCartService from "../src/app/services/cart/removeItemFromCartService.mjs"

describe('RemoveItemFromCartService', () => {
    it('should remove item from cart', () => {
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

        const item = {
            productId: 'id-totalmente-aleatorio'
        }

        const updatedCart = removeItemFromCartService(item, cart)
        expect(updatedCart.items.length).to.equal(0)
    })
    it('should decrease item quantity', () => {
        const cart = {
            id: 'id-meramente-randomico',
            sessionId: 'sessao-meramente-randomica',
            items: [{
                productId: 'id-totalmente-aleatorio',
                name: 'nome-completamente-aleatorio',
                price: 100,
                quantity: 2
            }],
            total: 200,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        const item = {
            productId: 'id-totalmente-aleatorio'
        }

        const updatedCart = removeItemFromCartService(item, cart)
        expect(updatedCart.items[0].quantity).to.equal(1)
    })
    it('should not remove item from cart', () => {
        const cart = {
            id: 'id-meramente-randomico',
            sessionId: 'sessao-meramente-randomica',
            items: [{
                productId: 'id-totalmente-aleatorio',
                name: 'nome-completamente-aleatorio',
                price: 100,
                quantity: 2
            }],
            total: 200,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        const item = {
            productId: 'id-nao-existente'
        }

        const updatedCart = removeItemFromCartService(item, cart)
        expect(updatedCart.items.length).to.equal(1)
    })
})