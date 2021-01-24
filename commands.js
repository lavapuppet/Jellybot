
const stevenisms = require("./commands/stevenisms.js")
const gif = require("./commands/gif.js")

const fetch = require('node-fetch');

const commands = {
    stevenisms,
    gif
}   

module.exports = async function (msg) {
    //console.log(msg);
    
    if (msg.channel.id == '802890903311613973') {
        let tokens = msg.content.split(' ');
        //let command=tokens.shift();
        if(tokens.indexOf("^_-")> -1){
            console.log(commands)
            stevenisms(msg, tokens);
        }
        else{
            command = tokens.shift()
             if(command.charAt(0) === "!"){
                command = command.substring(1);
                commands[command](msg, tokens);
             }
        }
    }
}