const mongoDB = require('mongoose')

const channelSchema = new mongoDB.Schema({
    _id: String,
    guildID: { type: String },
    welcomechannel: {
        type: [Number],
        default: []
    }
})

module.exports = mongoDB.model('channel-shematic', channelSchema)