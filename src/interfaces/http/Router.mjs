import Logger from '../../../vendor/helpers/logs/Logger.mjs'
import RouteLoader from '../../../vendor/helpers/Routes/RouteLoader.mjs'

class Router {
    constructor(app) {
        this.app = app
    }

    async registryRoutes() {
        Logger.info('Loading routes...')
        const loader = new RouteLoader(this.app)
        await loader.loadRoutes()
    }
}

export default Router