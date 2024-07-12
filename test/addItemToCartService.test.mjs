import { expect } from "chai"
import addItemToCartService from "../src/app/services/cart/addItemToCartService.mjs"

describe('AddItemToCartService', () => {
    it('should add item to cart', () => {
        const item = {
            productId: 'id-totalmente-aleatorio',
            name: 'nome-completamente-aleatorio',
            price: 100
        }
        const cart = {
            items: []
        }
        const updatedCart = addItemToCartService(item, cart)
        expect(updatedCart.items.length).to.equal(1)
        expect(updatedCart.items[0].productId).to.equal('id-totalmente-aleatorio')
        expect(updatedCart.items[0].quantity).to.equal(1)
    })
    it('should increment quantity if item already exists in cart', () => {
        const item = {
            productId: 'id-meramente-randomico',
            name: 'nome-meramente-randomico',
            price: 100
        }
        const cart = {
            items: [{
                productId: 'id-meramente-randomico',
                name: 'nome-meramente-randomico',
                price: 100,
                quantity: 1
            }]
        }
        const updatedCart = addItemToCartService(item, cart)
        expect(updatedCart.items.length).to.equal(1)
        expect(updatedCart.items[0].productId).to.equal('id-meramente-randomico')
        expect(updatedCart.items[0].quantity).to.equal(2)
    })
    it('should add item to cart when cart already has items', () => {
        const item = {
            productId: 'id-meramente-randomico',
            name: 'nome-meramente-randomico',
            price: 100
        }
        const cart = {
            items: [{
                productId: 'id-totalmente-aleatorio',
                name: 'nome-completamente-aleatorio',
                price: 100,
                quantity: 1
            }]
        }
        const updatedCart = addItemToCartService(item, cart)
        expect(updatedCart.items.length).to.equal(2)
        expect(updatedCart.items[0].productId).to.equal('id-totalmente-aleatorio')
        expect(updatedCart.items[0].quantity).to.equal(1)
        expect(updatedCart.items[1].productId).to.equal('id-meramente-randomico')
        expect(updatedCart.items[1].quantity).to.equal(1)
    })
})