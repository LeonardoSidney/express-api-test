import mongoose from "mongoose"

const { MONGO_URI } = process.env

class Migrations {
    constructor () {
        this.mongoUri = MONGO_URI
        this.options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
        this.migrationsDir = 'src/domain/databases/mongodb/migrations'
        this.changelogCollectionName = 'changelog'
    }

    async connect () {
        try {
            await mongoose.connect(this.mongoUri, this.options)
        } catch (error) {
            console.error('Error connecting to database', error)
        }
    }
}

export default Migrations