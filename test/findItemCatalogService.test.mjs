import { expect } from "chai"
import findItemCatalogService from "../src/app/services/cart/findItemCatalogService.mjs"
import Sinon from "sinon"
import CatalogModel from "../src/infra/databases/mongodb/models/catalog.mjs"

describe('FindItemCatalogService', async () => {
    let catalogModelStub = null
    beforeEach(() => {
        catalogModelStub = Sinon.stub(CatalogModel, 'findOne').callsFake(() => ({
            lean: () => ({
                productId: 'id-totalmente-aleatorio',
                name: 'nome-completamente-aleatorio',
                price: 100,
                createdAt: new Date(),
                updatedAt: new Date()
            })
        }))
    })

    afterEach(() => {
        catalogModelStub.restore()
    })

    it('should find item in catalog', async () => {
        const body = {
            productId: 'id-totalmente-aleatorio'
        }

        const foundItem = await findItemCatalogService(body)

        expect(foundItem.productId).to.equal('id-totalmente-aleatorio')
        expect(foundItem.name).to.equal('nome-completamente-aleatorio')
        expect(foundItem.price).to.equal(100)
        expect(catalogModelStub.calledOnce).to.be.true
        expect(catalogModelStub.calledWith({ productId: body.productId })).to.be.true
    })
})