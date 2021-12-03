
module.exports = {
    name: 'clear',
    args: true,
    permission: 'ADMINISTRATOR',
    cooldown: '5s',
    callback: async({message, args}) => {
        let sum = parseInt(args[0])
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("**[!]** У Вас нет доступа к данной команде!")
        if(!args[0]) return message.reply("**[!]** Введите пожалуйста сколько хотите удалить сообщений!")
        if(isNaN(args[0])) return message.reply("**[!]** Введите пожалуйста от 1 до 100")

        if(sum > 100) return message.reply("**[!]** Я могу удалить только до 100 сообщений")
        if(sum < 1) return message.reply("**[!]** Я могу удалить от 1 сообщения")

        await message.channel.bulkDelete(sum);
        message.channel.send(`**[✓]** Успешно! Удалено: \`${sum}\` сообщений!`);
    }
}