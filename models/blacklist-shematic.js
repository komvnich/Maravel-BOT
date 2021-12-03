const mongoDB = require('mongoose')

const blacklistSchema = new mongoDB.Schema({
    _id: String,
    blacklisted: {
        type: [String],
        default: []
    }
})

module.exports = mongoDB.model('blacklist-shematic', blacklistSchema)