import { expect } from "chai"
import createCartMapperService from "../src/app/services/cart/createCartMapperService.mjs"

describe('CreateCartMapperService', () => {
    it('should create cart mapper', () => {
        const cart = {
            sessionId: 'sessao-meramente-randomica'
        }

        const cartMapper = createCartMapperService(cart)
        expect(cartMapper.sessionId).to.equal('sessao-meramente-randomica')
    })
})