const Discord = require('discord.js');
const client = new Discord.Client();
const env = require('environment');

const PREFIX = '$';

client.on('ready', () => {
	console.log('Bot is online!');
});

client.on('message', message => {

	let args = message.content.substring(PREFIX.length).split(" ");

	if(args[0] === 'FED')
	{ 
		message.member.addRole('439613061725159424');
		message.reply('You have been added to the Front-End Dev role!');
	}else if(args[0] === 'BED') 
	{ 
		message.member.addRole('439612764416245760');
		message.reply('You have been added to the Back-End Dev role!');
	}else if(args[0] === 'FSD')
	{ 
		message.member.addRole('439613218965422083');
		message.reply('You have been added to the Full Stack Dev role!');
	}else if(args[0] === 'FEN')
	{ 
		message.member.addRole('439613261470629889');
		message.reply('You have been added to the Front-End Newbie role!');
	}else if(args[0] === 'BEN')
	{ 
		message.member.addRole('439613357360807936');
		message.reply('You have been added to the Back-End Newbie role!');
	}else if(args[0] === 'FSN')
	{ 
		message.member.addRole('439613546083647489');
		message.reply('You have been added to the Full Stack Newbie role!');
	}else if(args[0] === 'help')
	{ 
		message.reply('To assign yourself a role please use the following commands. Front-End Dev: $FED, Back-End Dev: $BED, Full Stack Dev: $FSD, Front-End Newbie: $FEN, Back-End Newbie: $BEN, Full Stack Newbie: $FSN. Please choose only ONE role!');
	}
});

client.login(env.BOT_TOKEN);