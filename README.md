# webdev-discord-bot
You are going to need to make sure you have both Node (v 6.0 or greater) and discord.js installed. You will also need to make sure you have a bot created with permissions set up and assigned to your server. This project assumes you already know how to do so, but if you do not you can find a bunch of tutorials on youtube. For setting up a discord bot go here:https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token


Once you have Node and discord.js installed, you will want to edit the discordbot.js file.

You will also need to create the roles you wish to use within your discord server and obtain their IDs. To obtain a role id just type \@rolename into chat and hit enter.

For the "const PREFIX = '$'" line change the $ to whatever prefix command you want to use (ex: !command, $command, &command)

For the "if(args[0] === 'COMMAND_STRING_HERE')" lines you will want to edit this to use whatever command string for the specific role. For example FED for Front-End Dev.

For the "message.member.addRole('ROLE_ID_HERE')" lines you will want to edit this to use the corresponding role ID you obtained from Discord.

For the "client.login('YOUR_BOT_TOKEN_HERE')" line you will want to edit this with your Bot Token.


Once you've edited everything and saved it, you just need to open up Node, navigate to the bot folder, and type node discordbot.js and the bot will launch!
