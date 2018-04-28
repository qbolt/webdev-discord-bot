const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = '$';

client.on('ready', () => {
	console.log('Bot is online!');
});

client.on('message', message => {

	let args = message.content.substring(PREFIX.length).split(" ");

	if(args[0] === 'COMMAND_STRING_HERE')
	{ 
		message.member.addRole('ROLE_ID_HERE');
		message.reply('You have been added to the [ROLE_NAME] role!');
	}else if(args[0] === 'COMMAND_STRING_HERE') 
	{ 
		message.member.addRole('ROLE_ID_HERE');
		message.reply('You have been added to the [ROLE_NAME] role!');
	}else if(args[0] === 'COMMAND_STRING_HERE')
	{ 
		message.member.addRole('ROLE_ID_HERE');
		message.reply('You have been added to the [ROLE_NAME] role!');
	}else if(args[0] === 'COMMAND_STRING_HERE')
	{ 
		message.member.addRole('ROLE_ID_HERE');
		message.reply('You have been added to the [ROLE_NAME] role!');
	}else if(args[0] === 'COMMAND_STRING_HERE')
	{ 
		message.member.addRole('ROLE_ID_HERE');
		message.reply('You have been added to the [ROLE_NAME] role!');
	}else if(args[0] === 'COMMAND_STRING_HERE')
	{ 
		message.member.addRole('ROLE_ID_HERE');
		message.reply('You have been added to the [ROLE_NAME] role!');
	}else if(args[0] === 'help')
	{ 
		message.reply('[Insert whatever instructions you want here]');
	}
});






client.login('YOUR_BOT_TOKEN_HERE');