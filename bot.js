const Discord = require('discord.js');

const client = new Discord.Client();

const prefix ='-';

const fs = require ('fs')

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync ('./commands/').filter (file => file.endsWith('.js'));
for (const file of commandFiles){
    const command = require (`./commands/${file}`);

    client.commands.set(command.name, command);
    const cooldowns = new Discord.Collection();
    
}

client.once('ready', () => {
    console.log('Mayu is online!');
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    //avatar function
    function getUserFromMention(mention) {
	if (!mention) return;

	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1);

		if (mention.startsWith('!')) {
			mention = mention.slice(1);
		}

		return client.users.cache.get(mention);
    }
    //ban function

    function getUserFromMention(mention) {
	// The id is the first and only match found by the RegEx.
	const matches = mention.match(/^<@!?(\d+)>$/);

	// If supplied variable was not a mention, matches will be null instead of an array.
	if (!matches) return;

	// However the first element in the matches array will be the entire mention, not just the ID,
	// so use index 1.
	const id = matches[1];

    return client.users.cache.get(id);
    
}
//fix that shitty async thing

    
}

//commands
///basic stuff
    if(command === 'ping'){
        message.channel.send('pong');

    } else if (command == 'pong'){
        message.channel.send('ping');
        
    } else if (command == 'hello'){ client.commands.get('hello').execute(message, args);

    } else if (command == 'twol_website'){ client.commands.get('twol website').execute(message, args);

    } else if (command == 'suck_your_mum') {client.commands.get('suck your mum').execute(message, args);

} else if (command == 'ban'){ client.commands.get ('ban').execute(message, args)

}

//avatar command
 if (command === 'avatar') {
	if (args[0]) {
		const user = getUserFromMention(args[0]);
		if (!user) {
			return message.reply('Please use an actual mention if you want to see someone elses avatar >:(.');
		}

		return message.channel.send(`${user.username}'s beautiful avatar owo: ${user.displayAvatarURL({ dynamic: true })}`);
	}

    return message.channel.send(`${message.author.username}, your avatar is beautiful in my opinon owo: ${message.author.displayAvatarURL({ dynamic: true })}`);
    

} else if (command == 'help'){ client.commands.get ('help').execute(message, args)
}




 

})

client.login('token');
