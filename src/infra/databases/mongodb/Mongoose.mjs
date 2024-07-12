import mongoose from 'mongoose'

class Mongoose {
    constructor (uri, options) {
        this.mongoose = mongoose
        this.uri = uri
        this.options = options
        this.connection = null
    }

    async connect () {
        this.connection = this.mongoose.connect(this.uri, this.options)
        return this.connection
    }

    async disconnect () {
        this.connection = null
        return this.mongoose.disconnect()
    }

    async isConnected () {
        return this.connection
    }

    async getConnection () {
        return this.connection
    }
}

export default Mongoose