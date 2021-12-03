module.exports = {
    name: 'newjoin',
    callback: ({message,client}) => {
        client.emit('guildMemberAdd', message.member)
    }
}