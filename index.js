const { Client, Events, GatewayIntentBits } = require('discord.js');


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    message.reply({
        content: "Hi from AayuBhai",
    });
});

client.on("interactionCreate", (interaction)=>{
    console.log(interaction);
    interaction.reply("Pong!!");
})

client.login(
    "MTI3NzYyMTkyOTg2NzQ3NzA4Mg.GP-BnK.FL1UrvCnO-mOUnvg5_xTqyfpv4yH2I7X-d8gbY"
);