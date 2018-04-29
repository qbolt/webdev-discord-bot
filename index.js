const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const applyRoles = require('./roles')
const PREFIX = '$'

client.on('ready', () => {
	console.log('Bot is online!')
})

client.on('guildMemberAdd', member => {
   member.send("Welcome to the server! Please stop by #role-assignment to assign a role based on your skill level! You can use $help to see the commands.");
});

client.on('message', message => {
	const args = message.content.substring(PREFIX.length).split(' ')
	const command = args[0]

	applyRoles(command.toUpperCase(), message)

	if(command === 'help') {
		message.reply('To assign yourself a role please use the following commands. Front-End Dev: $FED, Back-End Dev: $BED, Full Stack Dev: $FSD, Front-End Newbie: $FEN, Back-End Newbie: $BEN, Full Stack Newbie: $FSN. Please choose only ONE role!')
	}
})

client.login(config.BOT_TOKEN)