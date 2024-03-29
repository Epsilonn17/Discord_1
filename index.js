const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1159175764273549324')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=GgU-q_KTiKY') //Must be a youtube video link 
    .setState('Roblox')
    .setName('Epsilon')
    .setDetails(`.gg/eporium `)
    
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1138857476847054941/1223133268942262302/859df14670c5a566fb5030724affe10f.png?ex=6618bea0&is=660649a0&hm=fafbd308d86541da01ff6db167e93d59b5e5e68744a5c976e1d8d9905a3c1bdd&=&format=webp&quality=lossless&width=458&height=458') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Bored') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1117852451236761691.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Legit Discord Shop!') //Text when you hover the Small image
    .addButton('Shop', 'https://discord.com/invite/eporium')
    .addButton('Vouches', 'https://discord.gg/bG6PgpBA2P');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = ` .gg/eporium`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
