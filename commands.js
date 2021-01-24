const replies = [
    'Omg xD',
    '😛',
    'Lol sorry',
    'brb curling'
]
const stevenisms = require("commands/stevenisms.js")
const fetch = require('node-fetch');

const commands = {
    stevenisms
}

module.exports = async function (msg) {
    //console.log(msg);
    
    if (msg.channel.id == '802890903311613973') {
        let tokens = msg.content.split(' ');
        let command=tokens.shift();
        if(commands.charAt(0) === "!"){
            command = command.substring(1);
            commands[command](token)
        }
        if (tokens[0] === '!choo choo') {
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
        } else if (tokens[0] == '!gif') {
            let keywords = 'coding train';
            if (tokens.length > 1) {
                keywords = tokens.slice(1, tokens.length).join(" ");
            }
            let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8&ContentFilter=high`
            let response = await fetch(url);
            let json = await response.json();
            //console.log(json)
            const index = Math.floor(Math.random() * json.results.length);
            msg.channel.send(json.results[index].url);
        }
    }
}