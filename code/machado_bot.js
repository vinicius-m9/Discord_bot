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
    } else if(operation.toUpperCase() === 'BHASKARA'){
        const a = Number(rest[0]), b = Number(rest[1]), c = Number(rest[2])
        const delta = (b**2)-(4*a*c)
        if (delta > 0){
            const x1 = ((-b)+(Math.sqrt(delta)))/(2*a)
            const x2 = ((-b)-(Math.sqrt(delta)))/(2*a)
            message.channel.send(`S = {${x1}, ${x2}}`)
        } else if(delta === 0){
            const x = (-b)/(2*a)
            message.channel.send(`S = {${x}`)
        } else {
            message.channel.send('Não possui raiz real.')
        }
    }
})

client.login('token')
