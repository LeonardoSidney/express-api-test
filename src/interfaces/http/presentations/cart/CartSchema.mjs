import joi from 'joi'

export default {
    createCartSchema: joi.object({}).keys({
        sessionId: joi.string().required(),
    })
}