const fetch = require("node-fetch");

module.exports = async function (msg, args)  {
    let keywords = "cabbage dog"
    if (args.length > 0){
        keywords = args.join(" ");
    }
    let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&limit=8&ContentFilter=high`
    let response  =  await fetch(url);
    let json = await response.json();
    //console.log(json)
    //console.log(process.env.TENORKEY)
    const index = Math.floor(Math.random("") * json.results.length);
    msg.channel.send(json.results[index].url);
}