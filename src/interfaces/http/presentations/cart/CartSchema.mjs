import joi from 'joi'

export default {
    createCartSchema: joi.object({}).keys({
        sessionId: joi.string().required(),
    }),
    addItemSchema: joi.object({}).keys({
        sessionId: joi.string().required(),
        productId: joi.string().required(),
        quantity: joi.number().default(1),
    }),
}