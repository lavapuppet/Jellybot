module.exports = function (msg, args) {
    console.log(msg.content);
    if (msg.content === '^_-'){ 
        msg.reply('steven: -_^');
    }
}