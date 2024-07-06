import Migrations from "./Migrations.mjs"
import fs from 'fs'

class CreateMigration extends Migrations {
    constructor () {
        super()
        this.templatePath = 'vendor/migrations/TemplateMigration.js'
    }

    async create (name) {
        const date = new Date()
        const timestamp = date.toISOString().replace(/[^0-9]/g, '').slice(0, 14)
        const filename = `${timestamp}-${name}.mjs`

        const templateContent = fs.readFileSync(this.templatePath, 'utf8')

        const filePath = `${this.migrationsDir}/${filename}`
        fs.writeFileSync(filePath, templateContent)

        console.log(`Migration created at ${filePath}`)
    }
}

export default new CreateMigration().create(process.argv[2])