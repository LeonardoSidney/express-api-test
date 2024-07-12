import Logger from '../helpers/logs/Logger.mjs'
import Migrations from './Migrations.mjs'
import { up } from '../../src/infra/databases/mongodb/migrations/20240705235222-catalog.mjs'
import CatalogModel from '../../src/infra/databases/mongodb/models/catalog.mjs'

class UpMigrations extends Migrations {
    constructor () {
        super()
        this.connection = this.connect()
    }

    async up () {
        Logger.info('Running migrations...')
        await up(CatalogModel)
    }
}

export default new UpMigrations