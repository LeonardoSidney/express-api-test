import mongoose from 'mongoose'
import Logger from '../../../../../vendor/helpers/logs/Logger.mjs'
const { Schema } = mongoose

const cartSchema = new Schema({
    id: { type: String, required: true },
    sessionId: { type: String, required: true },
    items: { type: Array, required: true },
    total: { type: Number, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date, required: true },
})

cartSchema.index({ id: 1 })
cartSchema.index({ sessionId: 1 })

cartSchema.pre('find', function (next) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    Logger.info('CartModel :: pre find hook:: ', yesterday)
    this.where({ updatedAt: { $gte: yesterday } })
    next()
})

cartSchema.pre('findOne', function (next) {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    Logger.info('CartModel :: pre findOne hook:: ', yesterday)
    this.where({ updatedAt: { $gte: yesterday } })
    next()
})

const CartModel = mongoose.model('Cart', cartSchema)

export default CartModel