const mongoDB = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const messageSchema = mongoDB.Schema({
    _id: String,
    userId: String,
    message: Number
})

module.exports = mongoDB.model('message-schematic', messageSchema);