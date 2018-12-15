# Secret Santa Bot

I created this bot to automatically assign targets to each secret santa participant on a discord server.
it pairs santas with other santas and sends them a message telling them who they should give a gift.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine. This is good enough to start up the bot and run the command necessary for it to send messages to participants.

### Prerequisites

You need to have the following to use the bot:

```
Node.js
An app with a bot on Discord developer portal
```

Note that the bot must be invited to your server. For more information read Discord's documentation.

### Installing

A step by step series of examples that tell you how to get a development env running

Install node dependencies using CLI

```
npm i
```

Go to botconfig.json and adjust the token to the token of your bot and prefix to whichever prefix you want to use for the bot.
The file looks like this:
```
{
    "token": "YOUR-BOT-TOKEN-HERE",
    "prefix": "!"
}
```

After that, go to participants.json and change the array so that the array contains discord tags (NICK#1234)
```
{
    "santas": [
        "santa#1234",
        "santa#1234",
        "santa#1234",
        "santa#1234"
    ]
}
```

After this, the bot is ready to be started.

## Deployment

Simply go to the folder bot.js is on your command line interface, and type ``node bot.js``. The bot will then start up
and you'll see it come online on your server.

## Built With

* [Discord.js](https://github.com/discordjs/discord.js/) - javascript library used to interact with discord API

## Authors

* **Gonzalo Ortiz** -  [Waffaru](https://github.com/waffaru)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

