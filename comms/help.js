const {MessageEmbed} = require('discord.js')
const shev = require('shev')
const MenuPages = shev.MenuPages
module.exports = {
    name: 'help',
    callback: ({ message, args, text, client, prefix, instance }) => {
        const {guild} = message
        const one = new MessageEmbed()
        .setTitle('ПОМОЩЬ 💡')
        .setColor('BLUE')
        .setDescription(`
Привет! я Maravel, я ассистент сервера ${message.guild.name}. Моя задача - помогать тебе!
Если у тебя появятся какие-то вопросы касательно меня - не стесняйся уточнить у администрации.

\`Чтобы перелистнуть страницу, нажмите на реакцию "⏩"\`
        `)
        .setThumbnail('https://i.imgur.com/9q5GiI2.jpg')
        const two = new MessageEmbed()
        .setTitle('ОСНОВНЫЕ 📰')
        .setColor('#ebe5e5')
        .setDescription(`
        \`${instance.messageHandler.get(guild, 'CURRENT_PREFIX', {
            PREFIX: prefix
        })}blacklist аргмент\` -  добавить в черный список слово.
        \`${instance.messageHandler.get(guild, 'CURRENT_PREFIX', {
            PREFIX: prefix
        })}clear число\` - очистить сообщения.
        \`${instance.messageHandler.get(guild, 'CURRENT_PREFIX', {
            PREFIX: prefix
        })}rank\` - выведет твой ранг и опыт.
        \`${instance.messageHandler.get(guild, 'CURRENT_PREFIX', {
            PREFIX: prefix
        })}top\` - выведет топ 10 общительных ребят.
        \`${instance.messageHandler.get(guild, 'CURRENT_PREFIX', {
            PREFIX: prefix
        })}ticket\` - создать тикет.
        `)
        .setThumbnail('https://i.yapx.ru/M8fWO.png')
        const three = new MessageEmbed()
        .setTitle('НАСТРОЙКИ 🔧')
        .setColor('BLUE')
        .setDescription(`
        \`${instance.messageHandler.get(guild, 'CURRENT_PREFIX', {
            PREFIX: prefix
        })}command <disable/enable> имя команды\` - Отключить/включить определенную команду.
        \`${instance.messageHandler.get(guild, 'CURRENT_PREFIX', {
            PREFIX: prefix
        })}prefix <новый префикс>\` - Сменить префикс бота.
        \`Отобразить новых посетителей\` - В настройках сервера: Обзор/канал системных сообщений.
        `)
        .setThumbnail('https://i.yapx.ru/K1JeY.png')
        const four = new MessageEmbed()
        .setTitle('Ссылки')
        .setColor('BLUE')
        .setDescription('')
        .addFields(
            { name: 'Пожелания/баги', value: `Сообщай скорее автору бота,\nЧтобы ты хотел видеть у данного бота!` },
            { name: '\u200B', value: '\u200B' },
            { name: 'YouTube', value: 'https://youtube.com/c/komvnich', inline: true },
            { name: 'DISCORD', value: 'https://discord.gg/uahproject', inline: true },
            { name: 'Это последняя страница.', value: '\u200B' },
        )
        .setFooter('Maravel 1.4v', 'https://i.imgur.com/9q5GiI2.jpg')
        .setThumbnail('https://i.yapx.ru/K1JeY.png')
        const pages = [
            one,
            two,
            three,
            four
        ]
        MenuPages(message, pages)
    }
}