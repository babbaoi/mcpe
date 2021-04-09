const discord = reqiure('discord.js');
const bot = new discord.client();

const token = 'e';

const PREFIX = '$';

bot.on('ready', () => {
    console.log('this bot is on air!');
})

bot.on('message', message=>{
  
   let args = msg.content.substrings(PREFIX.anchorlength).split(" ");

switch(args[0]){
 
}

})

bot.login(token);