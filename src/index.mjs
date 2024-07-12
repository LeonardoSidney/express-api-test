import express from 'express'
import Logger from '../vendor/helpers/logs/Logger.mjs'
import Mongoose from './infra/databases/mongodb/Mongoose.mjs'
import Router from './interfaces/http/Router.mjs'

const {
    PORT,
    MONGO_URI
} = process.env

const app = express()
app.use(express.json())

const mongo = new Mongoose(MONGO_URI)
await mongo.connect().then(() => {
        Logger.info('Connected to MongoDB')
    })
    .catch((error) => {
        Logger.error('Error connecting to MongoDB', error)
    })

const router = new Router(app)
await router.registryRoutes()

app.listen(PORT, () => {
    Logger.info(`Server running on port ${PORT}`)
    Logger.info(`Environment: ${process.env.NODE_ENV}`)
}).on('error', (error) => {
    Logger.error('Error starting server', error)
}).on('request', (req, res) => {
    Logger.info(`Request received: ${req.method} ${req.url}`)
})

export default app