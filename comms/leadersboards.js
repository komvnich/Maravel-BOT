const { reply } = require('canvacord/src/Canvacord');
const Levels = require('discord-xp')

module.exports = {
    name: 'top',
    callback: async({message, client}) =>{
        const leaderRanks = await Levels.fetchLeaderboard(message.guild.id, 10);
            if(leaderRanks.length < 1) return reply("Нет топа!")
        const leaderboard = await Levels.computeLeaderboard(client, leaderRanks, true);
        const rank_lb = leaderboard.map(e => `**#${e.position} ${e.username}#${e.discriminator}**\nУр: ${e.level} ➠  ⭐ ${e.xp.toLocaleString()}`);
        let fields = [];
        await message.channel.send({
            embed: {
              title: 'TOP | Общительные ребята',
              description: `\n\n${rank_lb.join("\n\n")}`,
              color: '#f1f2f3',
              fields: fields,
            }
          });
    }
}