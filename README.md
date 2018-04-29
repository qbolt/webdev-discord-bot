# webdev-discord-bot
You are going to need to make sure you have both Node (v 6.0 or greater) and discord.js installed. You will also need to make sure you have a bot created with permissions set up and assigned to your server. This project assumes you already know how to do so, but if you do not you can find a bunch of tutorials on youtube. For setting up a discord bot go here:https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token


Once you have Node and discord.js installed, you will want to edit a few files; index.js and roles.js. You also need to make a config.json file (see below)

You will also need to create the roles you wish to use within your discord server and obtain their IDs. To obtain a role id just type a back slash and then the @rolename into chat and hit enter.

What to change in index.js:

For the "const PREFIX = '$'" line change the $ to whatever prefix command you want to use (ex: !command, $command, &command)

What to change in roles.js:

Here we have assigned constant variables for each role command. For example const FED = 'FED' (Which will be used for Front-End Dev role)
We have then put a constant variable of all the roles assigned to their Discord ID and a message to the user letting them know they've been added to that role :
const roles = {
    FED: {
        id: '439613061725159424',
        welcome: 'You have been added to the Front-End Dev role!',
        
        What you will want to change in this file is the variables, IDs, and messages to relate to your specific roles in your discord. 
        
        You will also find: const hierarchy = {
    FSD: [ FED, BED ],
    FSN: [ FEN, BEN ],
}
This changes the hiearchy of your set roles. Edit as needed with correct role commands.


Lastly, you need to make a file called config.json and add the following:
{
    "BOT_TOKEN": "YOUR_BOT_TOKEN_HERE"
}

Self-explanatory. Just add your bot's token in as appropriate.


Once you've edited everything and saved it, you just need to open up Node, navigate to the bot folder, and type node index.js and the bot will launch!
