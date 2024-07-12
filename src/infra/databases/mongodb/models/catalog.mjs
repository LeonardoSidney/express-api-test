import mongoose from 'mongoose'
const { Schema } = mongoose

const catalogSchema = new Schema({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
})

catalogSchema.index({ productId: 1 }, { unique: true })

const CatalogModel = mongoose.model('Catalog', catalogSchema)

export default CatalogModel
