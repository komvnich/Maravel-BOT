const blacklistwords = require('../models/blacklist-shematic')

module.exports = {
    name: 'blacklistwords',
    callback: async({message,args}) => {
        let words = args[0]
        let DB_USER = await blacklistwords.findById(message.guild.id)
        if(!DB_USER) await blacklistwords.findByIdAndUpdate(message.guild.id, {}, {new: true, upsert: true, setDefaultsOnInsert: true})
        if(!words) message.reply('Не указали плохие слова)')
        else{await blacklistwords.findByIdAndUpdate(message.guild.id, {$push: {blacklisted: `${words}`}}, {new: true, upsert: true})}
    }
}