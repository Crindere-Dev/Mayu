const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='-';

const fs = require ('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync ('./commands/').filter (file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
}

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
        
    } else if (command == 'hello'){ client.commands.get('hello').execute(message, args);

    } else if (command == 'twol_website'){ client.commands.get('twol website').execute(message, args);

    } else if (command == 'suck_your_mum'){client.commands.get('suck your mum').execute(message, args);
}

})

client.login('NzcwNDA0NTA4MTU2OTUyNjE3.X5dFHA.3dHfpBvA83VTN-COxmjnGqLa_LQ');
