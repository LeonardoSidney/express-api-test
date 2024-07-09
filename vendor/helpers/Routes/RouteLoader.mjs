import Logger from '../logs/Logger.mjs'
import fs from 'fs'
import path from 'path'
import SchemaMiddleware from '../middlewares/SchemaMiddleware.mjs'

class RouteLoader {
    constructor (app) {
        this.routeFolderPath = 'src/interfaces/http/presentations'
        this.app = app
        this.dirname = path.resolve(path.dirname(''))
    }

    async loadRoutes () {
        const files = fs.readdirSync(this.routeFolderPath)
        for (const file of files) {
            const filepath = `${this.routeFolderPath}/${file}`
            if (fs.statSync(filepath).isDirectory()) {
                await this.loadRouteRecursive(filepath)
            }
        }
    }

    async loadRouteRecursive (routeFolderPath) {
        const files = fs.readdirSync(routeFolderPath)
        for (const file of files) {
            const filepath = `${this.dirname}/${routeFolderPath}/${file}`
            if (fs.statSync(filepath).isDirectory()) {
                await this.loadRouteRecursive(filepath)
            }
            if (fs.statSync(filepath).isFile() && file.endsWith('.mjs') && file.toLowerCase().includes('route')) {
                Logger.info(`Loading route: ${routeFolderPath}/${file}`)
                try {
                    const { default: routes } = await import(filepath)
                    for (const route of routes) {
                        this.app[route.method](route.route, SchemaMiddleware.validate.bind(SchemaMiddleware.validate,route.validate), route.handler.bind(route.handler))
                    }
                } catch (error) {
                    console.error(error)
                    Logger.error(`Error loading route: ${filepath}`, error)
                }
            }
        }
    }
}

export default RouteLoader