const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='-';

client.once('ready', () => {
    console.log('Mayu is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong');
    } else if (command == 'pong'){
        message.channel.send('ping');
    }
})

client.login('NzcwNDA0NTA4MTU2OTUyNjE3.X5dFHA.BU_C50pShrPjFxgRKBs8xDWhU2U');
