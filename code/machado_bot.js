const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.login('token')
