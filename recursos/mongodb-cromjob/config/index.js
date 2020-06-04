if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

module.exports = {
    MONGO_URI: process.env.MONGO_URI
}