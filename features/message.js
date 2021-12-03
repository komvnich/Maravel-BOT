const messageSchema = require('../models/message-shematic')
module.exports = async (client) =>{
    client.on('message', async (message) => {
        let DB_USER = await messageSchema.findById(message.guild.id)
        const user = message.author
        if(user.bot) return
        if(!DB_USER) await messageSchema.findByIdAndUpdate(message.guild.id, {userId: user.id}, {new: true, upsert: true, setDefaultsOnInsert: true})
        else{ await messageSchema.findByIdAndUpdate(message.guild.id, {$inc: {
                message: 1
            }}, {new: true, upsert: true})
        }
    })
}