const { Telegraf } = require('telegraf')
const axios=require("axios");
require('dotenv').config()

const bot = new Telegraf(process.env.BOT_TOKEN)
bot.start((ctx) => ctx.reply('Welcome'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.command('owner', async (ctx) =>{
    const res=await axios.get("https://api.github.com/users/imsidharthsurya");
    console.log(res.data)
    ctx.reply(JSON.stringify(res.data))
})

bot.hears('hi', (ctx) => ctx.reply('Hey there I am sidharth'))
bot.launch()