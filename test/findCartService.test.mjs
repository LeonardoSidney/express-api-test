import { expect } from "chai"
import findCartService from "../src/app/services/cart/findCartService.mjs"
import Sinon from "sinon"
import CartModel from "../src/infra/databases/mongodb/models/cartModel.mjs"

describe('FindCartService', async () => {
    let cartModelStub = null
    beforeEach(() => {
        cartModelStub = Sinon.stub(CartModel, 'findOne').callsFake(() => ({
            lean: () => ({ id: 'sessao-meramente-randomica' })
        }))
    })

    afterEach(() => {
        cartModelStub.restore()
    })

    it('should find cart', async () => {
        const id = 'id-meramente-randomico'
        
        const foundCart = await findCartService(id)

        expect(foundCart.id).to.equal('sessao-meramente-randomica')
        expect(cartModelStub.calledOnce).to.be.true
        expect(cartModelStub.calledWith({ id })).to.be.true
    })
})