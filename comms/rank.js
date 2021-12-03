const canvacord = require('canvacord')
const Levels = require('discord-xp')
const {MessageAttachment} = require('discord.js')

module.exports = {
    name: 'rank',
    callback: async({message}) => {
        const userData = await Levels.fetch(message.author.id, message.guild.id)
        const requiredXP = (userData.level +1) * (userData.level +1) *100
        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({format: "png", size: 1024}))
        .setProgressBar("#2c94d4","COLOR")
        .setBackground("IMAGE", "https://i.imgur.com/raco0Gy.jpg")
        .setCurrentXP(userData.xp)
        .setLevel(userData.level)
        .setRequiredXP(requiredXP)
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
        const img = await rank.build()
        message.channel.send(new MessageAttachment(img, "RankCard.png"))
    }
}