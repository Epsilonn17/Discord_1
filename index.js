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
    .setApplicationId('1167760523090219088')
    .setType('STREAMING')
    .setURL('https://www.youtube.com/watch?v=MtlA34oIUdU') //Must be a youtube video link 
    .setState('Minecraft')
    .setName('Epsilon')
    .setDetails(`.gg/eporium`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/1138857476847054941/1223136011622678659/6cd2e83766e656493133b117c1590464.png?ex=6618c12d&is=66064c2d&hm=4112c6f7af3b2e4ea72d499be8857b7f524f9454b1f3aaaff75c3949e06aadea&=&format=webp&quality=lossless&width=458&height=458') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('Nitro & Exitlag available !') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1117852451236761691.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('Legit Discord Shop !') //Text when you hover the Small image
    .addButton('⇢˗ˏˋShop࿐ྂ', 'https://discord.com/invite/eporium')
    .addButton('⇢˗ˏˋVouches࿐ྂ', 'https://discord.gg/bG6PgpBA2P');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `.gg/eporium`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
