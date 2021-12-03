const { create } = require('sourcebin')

module.exports = (client) => {
    client.on('message', (message) => {
        if(message.author.bot) return
        if(message.content.length > 105) {
            create([
                {
                    content: message.content,
                    language: 'javascript'
                }
            ]).then((bin) => {
                message.reply(`Ваше сообщение слишком большое! \nДля удобства Мы поместили его в отдельную ссылку \n${bin.url}`)
            })
            message.delete()
        }
    })
}