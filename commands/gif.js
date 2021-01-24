const fetch = require("node-fetch");

module.exports = async function (msg, args)  {
    let keywords = "cabbage dog"
    if (DOMSettableTokenList.length > 1){
        keywords = args.join(" ");
    }
    let url = 'https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8&ContentFilter=high'
    let respoinse  =  await fetch(url);
    let json = await respoinse.json();
    const index = Math.floor(Math.random("") * json.results.length);
    msg.channel.send(json.results[index].url);
    msg.channel.send("GIF from Tenor: " + keywords);
}