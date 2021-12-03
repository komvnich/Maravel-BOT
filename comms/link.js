const { MessageEmbed } = require("discord.js");
const { versionMaravel } = require('../index')

module.exports = {
    name: 'link',
    callback: async({message}) => {
        let user = null;
        user = message.mentions.members.first() || message.author;
                
        message.guild.fetchInvites()
        .then(invites =>
        {
            const userInvites = invites.array().filter(o => o.inviter.id === user.id);
            let userInviteCount = 0;
        
            for(var i=0; i < userInvites.length; i++)
            {
                let invite = userInvites[i];
                userInviteCount += invite['uses'];
                userInviteCount - invite['left'];
            }  
            if(message.mentions.members.first()){
                const embed = new MessageEmbed() 
                .setColor('BLUE')
                .setTitle('**Пользователя приглашения**')
                .setDescription(`У пользователя ${message.mentions.members.first()} ${userInviteCount} приглашений`)
                .setTimestamp()
                .setFooter('Maravel 1.3v', 'https://i.imgur.com/9q5GiI2.jpg');
             message.channel.send(embed)
             }else{
                const embed = new MessageEmbed()
                        .setColor('BLUE')
                        .setTitle('**Мои приглашения**')
                        .setDescription(`У тебя ${userInviteCount} приглашений`)
                        .setTimestamp()
                        .setFooter(`Maravel ${versionMaravel}`, 'https://i.imgur.com/9q5GiI2.jpg');
                     message.channel.send(embed)
                    }
            }
        ) 
    }
}