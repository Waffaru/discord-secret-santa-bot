const botconfig = require("./botconfig.json");
const Discord = require('discord.js');
var participantObj = require('./participants.json');
const client = new Discord.Client();
var santas = participantObj.santas;
var santas2 = santas.slice(0);
var prefix = botconfig.prefix;

function getRandon(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
      let user = client.users.find(user => user.username === "Waffaru");
      console.log(user.username);
   //  msg.reply('pong');
    user.send("Test");
    
  } else if (msg.content === `${prefix}drawSantas`) {
      for(let i = 0; i < santas.length; i++) {
          let same = true;
          while(same) {
              let santaId = getRandon(santas2.length);
              let user = client.users.find(user => user.tag === santas[i]);
              if(user.tag != santas2[santaId]) {
                let target = client.users.find(user => user.tag === santas2[santaId]);
                santas2.splice(santaId, 1)

                console.log(`Ho ho ho! ${user.tag} You're receiving this message because you took part in the secret santa! You are secret santa for ${target.tag}, Happy holidays!`);
                //user.send(`Ho ho ho, ${user.tag}! You're receiving this message because you took part in the secret santa! You are secret santa for ${target.tag}, Happy holidays!`)
                console.log(santas2.length);
                same = false;
              } else {
                  //Conflict message
                  console.log('Conflict');
              }
          }
      }
  }
});

client.login(botconfig.token);