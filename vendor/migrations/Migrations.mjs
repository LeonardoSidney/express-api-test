import MongooseConnector from '../../src/domain/databases/mongodb/Mongoose.mjs'

const { MONGO_URI } = process.env

class Migrations {
    constructor () {
        this.mongoUri = MONGO_URI
        this.options = {}
        this.migrationsDir = 'src/domain/databases/mongodb/migrations'
        this.changelogCollectionName = 'changelog'
    }

    async connect () {
        const mongooseConnector = new MongooseConnector(this.mongoUri, this.options)
        try {
            await mongooseConnector.connect()
        } catch (error) {
            console.error('Error connecting to database', error)
        }

        return mongooseConnector
    }
}

export default Migrations