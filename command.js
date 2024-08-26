const { REST, Routes } = require ('discord.js');

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken("MTI3NzYyMTkyOTg2NzQ3NzA4Mg.GP-BnK.FL1UrvCnO-mOUnvg5_xTqyfpv4yH2I7X-d8gbY");

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands("1277621929867477082"), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
        }
        catch (error) {
        console.error(error);
        }
        }) ();