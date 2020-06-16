require('express-async-errors')
const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
const { NotFoundModdleware, ErrorMiddleware } = require('../middleware')

module.exports = function({ HomeRoutes }) {
    const router = express.Router()
    const apiRoutes = express.Router()
    apiRoutes
        .use(express.json())
        .use(cors())
        .use(helmet())
        .use(compression())
    
    apiRoutes.use('/home', HomeRoutes)

    router.use('/v1/api', apiRoutes)

    router.use(NotFoundModdleware).use(ErrorMiddleware)

    return router
}