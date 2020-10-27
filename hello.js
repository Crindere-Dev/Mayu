module.exports = {
    name:'hello',
    description: "this is a hello command",
    execute(message, _args){
        message.channel.send('hi');
    }
}
