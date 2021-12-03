const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "ticket",
    aliases: [],
    permissions: [],
    description: "open a ticket!",
    callback: async({message, args, cmd, client, discord}) => {
        const newCategory = await message.guild.channels.create('TICKETS', {
            type: 'category',
            permissionsOverwrites: [{
              id: message.guild.id,
              deny: ['MANAGE_MESSAGES'],
              allow: ['SEND_MESSAGES']
            }]
          })
          const channel = await message.guild.channels.create(`Тикет: ${message.author.tag}`, {
            type: 'text',
            parent: newCategory.id,
            permissionsOverwrites: [
            {
              id: message.guild.id,
              deny: ['SEND_MESSAGE', 'VIEW_CHANNEL']
            },
            {
              id: message.author.id,
              allow: ['VIEW_CHANNEL', 'SEND_MESSAGE']
            }
          ]
          });

          channel.updateOverwrite(message.guild.id, {
            SEND_MESSAGE: false,
            VIEW_CHANNEL: false,
          });
          channel.updateOverwrite(message.author, {
            SEND_MESSAGE: true,
            VIEW_CHANNEL: true,
          });
      const sendNotif = await new MessageEmbed()
        .setColor("BLUE")
        .setTitle(channel)
        .setTimestamp()
        .setDescription(`Спасибо что обратились за помощью!\nБлижайшее время Вам ответят.\n🔒 - означает что тикет был закрыт
        \n⛔ - означает что тикет будет удалён\n`)
        .setFooter('Maravel 1.4v', 'https://i.imgur.com/9q5GiI2.jpg');
        await channel.send(sendNotif)
      const reactionMessage = await channel.send("<@" + message.author.id + ">");
  
      try {
        await reactionMessage.react("🔒");
        await reactionMessage.react("⛔");
      } catch (err) {
        channel.send("**[!]** Ошибка реакций! Повторите попытку позднее!");
        throw err;
      }
  
      const collector = reactionMessage.createReactionCollector(
        (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
        { dispose: true }
      );
  
      collector.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
          case "🔒":
            channel.updateOverwrite(message.author, { SEND_MESSAGES: false });
            break;
          case "⛔":
            channel.send("**[!]** Внимание! Тикет будет удалён через 10 секунд.");
            setTimeout(() => channel.delete(), 10000);
            setTimeout(() => newCategory.delete(), 12000);
            break;
        }
      });
  
      message.channel
        .send(`Ув.пользователь, вы только что создали тикет: ${channel}`)
        .then((msg) => {
          setTimeout(() => msg.delete(), 7000);
          setTimeout(() => message.delete(), 3000);
        })
        .catch((err) => {
          throw err;
        });
    },
  };
  