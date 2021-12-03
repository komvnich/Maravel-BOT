const { MessageEmbed } = require("discord.js");
const weather = require('weather-js');

module.exports = {
    name: 'weather',
    cooldown: '10s',
    callback: async({message,args}) => {
      const embed = new MessageEmbed()
        .setColor("RED")   
        .setTitle("**Всплывающая подсказка.**")
        .setDescription(
          `Наведи курсор на подсказку **➠** [〔i〕](${message.url} "Введите пожалуйста после команды город!")`
        )
        .setFooter('Maravel 1.3v', 'https://i.imgur.com/9q5GiI2.jpg');
        
    
    try {
      if (!args.length) {
        return message.channel.send(embed)
      }

      await weather.find({ search: args.join(' '), degreeType: 'C' }, async (err, result) => {
        if (err) {
          return message.channel.send(`Не найдено результатов.`);
        }

        if (!result || !result.length) {
          return message.channel.send("Соединение не установлено.");
        }

        let fields = [];
        for (let i = 0; i < result[0].forecast.length; i++) {
          fields.push({
            name: new Date(result[0].forecast[i].date).toDateString(),
            value: `**Состояние:** ${result[0].forecast[i].skytextday}\n**Низкий:** ${result[0].forecast[i].low} \u00B0${result[0].location.degreetype}\n**Высокий:** ${result[0].forecast[i].high} \u00B0${result[0].location.degreetype}\n**Осадки:** ${result[0].forecast[i].precip} cm`
          });
        }

        await message.channel.send({
          embed: {
            title: '☀️ | Прогноз погоды',
            description: result[0].location.name,
            color: '#f1f2f3',
            fields: fields,
          }
        });
      });
    } catch (err) {
      return 
    }
  }
}
    