const { MessageEmbed, Message } = require('discord.js')

module.exports = {
    name: 'ban',
    cooldown: '5s',
    args: true,
    callback:  async({message, args}) => {
        const embed = new MessageEmbed()
        .setColor("RED")   
        .setTitle("**Всплывающая подсказка.**")
        .setTimestamp()
        .setDescription(
          `Наведи курсор на подсказку **➠** [〔i〕](${message.url} "Я не имею прав блокировать участника!")`
        )
        .setFooter('Maravel 1.4v', 'https://i.imgur.com/9q5GiI2.jpg');

        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.channel.send(embed);
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const embed_user = new MessageEmbed()
            .setColor("BLUE")
            .setTitle("**Блокировка**")
            .setDescription('**[!]** Укажите пожалуйста пользователя: `@пользователь`')
            .setTimestamp()
            .setFooter('Maravel 1.4v', 'https://i.imgur.com/9q5GiI2.jpg');
        if (!Member) return message.channel.send(embed_user);
            Member.ban({ reason: args.slice(1).join(" ")})
            const embed_memberSend = new MessageEmbed()
                .setColor("BLUE")
                .setTitle('**Вы были забанены**')
                .setTimestamp()
                .setDescription(`Уважаемый ${Member}`)
                .addFields(
                    { name: '\u200B', value: '\u200B' },
                    {name: 'Сервер', value: `**${message.guild.name}**`},
                    {name: 'Администратором', value: `${message.author.tag}`},
                    {name: 'Причина', value: `${args.slice(1).join(" ")}`},
                    { name: '\u200B', value: '\u200B' },
                )
                .setFooter('Maravel 1.4v', 'https://i.imgur.com/9q5GiI2.jpg');
                Member.user.send(embed_memberSend).catch(error => console.log(error))

                const embed_succ = new MessageEmbed()
                .setColor("BLUE")
                .setTitle(`**Участник ${Member} был забанен**`)
                .setTimestamp()
                .setDescription('**Успешно**')
                .addFields(
                    {name: 'Администратор', value: `${message.author.tag}`, inline: true},
                    {name: 'Причина', value: `${args.slice(1).join(" ")}`, inline: true},
                    { name: '\u200B', value: '\u200B' },
                )       
                .setFooter('Maravel 1.4v', 'https://i.imgur.com/9q5GiI2.jpg');
                await message.channel.send(embed_succ)
    }
}