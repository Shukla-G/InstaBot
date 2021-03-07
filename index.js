const Insta = require('@androz2091/insta.js');
const fetch = require('node-fetch');
const client = new Insta.Client();
 
client.on('connected', () => {
    console.log(`I have logged in as ${client.user.username}`);
});
 
client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return // ignores messages by you
    message.reply("Your message here") // remove this line if you dont want a message to be sent
    fetch(
        'Your webhook url here', 
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: 'Instagram Bot',
            avatar_url:
              'https://pbs.twimg.com/profile_images/1306051401236099072/nuSA8oqW_400x400.jpg',
            embeds: [
              {
                title: `New Direct Message from ${message.author.username}`,
                description: `${message.content}`,
              },
            ],
          }),
        }
    );
});

client.login('Your Username here', 'Your Password Here');
