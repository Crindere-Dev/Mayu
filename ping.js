module.exports = {
    name:'ping',
    description: "this is a ping command",
    execute(message, _args){
        message.channel.send('pong');
    }
}
