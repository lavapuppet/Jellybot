console.log("copying 😘");
require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('😉');
}
const stevenisms = require("./commands/stevenisms.js");

client.on('message', commandHandler);


