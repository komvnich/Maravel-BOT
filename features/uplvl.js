const Levels = require('discord-xp')
module.exports = (client) => {
    client.on('message', async (message) =>{
        if(!message.guild) return
        if(message.author.bot) return

            let number = [5,10,15]
            let Number = number[Math.floor(Math.random()*(number.length))]
            const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, Number)
            if(hasLeveledUp) {
                const user = await Levels.fetch(message.author.id, message.guild.id)
                message.channel.send(`${message.author}, поздравляю! Теперь твой уровень **${user.level}**`)
            }
            const profile = await Levels.fetch(message.author.id, message.guild.id)
        if(profile === 1){
            const giveRole = message.guild.role.cache.find(role => role.id === '846318535314636810')
            member.roles.add(giveRole)
        }
    })
}