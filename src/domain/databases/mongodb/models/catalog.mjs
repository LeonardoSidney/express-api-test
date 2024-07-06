import mongoose from 'mongoose'
const { Schema } = mongoose

const catalogSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
})

catalogSchema.index({ id: 1 }, { unique: true })

const catalogModel = mongoose.model('Catalog', catalogSchema)

export default catalogModel
