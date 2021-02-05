const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message =>{
    const arr = message.content.split(' ')
    const [operation, ...rest] = arr

    if (operation.toUpperCase() === 'SOMA'){
        let result = 0
        for (const i of rest){
            result = result + Number(i)
        }
        message.channel.send(result)
    } else if(operation.toUpperCase() === 'SUBTRACAO'){
        let result = 2*Number(rest[0])
        for (const i of rest){
            result = result - Number(i)
        }
        message.channel.send(result)
    } else if(operation.toUpperCase() === 'MULTIPLICACAO'){
        let result = 1
        for (const i of rest){
            result = result * Number(i)
        }
        message.channel.send(result)
    } else if(operation.toUpperCase() === 'DIVISAO'){
        let result = Number(rest[0])**2
        for (const i of rest){
            result = result / Number(i)
        }
        message.channel.send(result)
    }
})

client.login('token')
