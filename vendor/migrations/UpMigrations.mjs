import Logger from '../helpers/logs/Logger.mjs'
import Migrations from './Migrations.mjs'

class UpMigrations extends Migrations {
    constructor () {
        super()
        this.connection = this.connect()
    }

    async up () {
        Logger.info('Running migrations...')
    }
}

export default new UpMigrations