
class SchemaMiddleware {
    static validate (schema, request, response, next) {
        const { body } = request
        const { error, value } = schema.validate(body)

        if (error) {
            return response.status(400).json(error)
        }

        request.body = value

        next()
    }
}

export default SchemaMiddleware