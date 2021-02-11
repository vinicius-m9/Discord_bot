const Discord = require('discord.js')
const client = new Discord.Client()
const {token, prefix} = require('./config.json')
const funcMath = require('./funcMath.js')

//Evento que dispara ao logar o bot
client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

//Evento que dispara ao receber mensagem em canais de texto
client.on('message', message =>{
    const arr = message.content.split(' ')

    //Checa se o comando é uma função
    if(message.content.startsWith(prefix) & arr[1] !== undefined){
        const mark = arr[1].toUpperCase()

        //Checa a função que foi chamada
        switch(mark){
            case 'BHASKARA':
                message.channel.send(funcMath.bhaskara(arr[2], arr[3], arr[4]))

            break
            case 'PITAGORAS':
                message.channel.send(funcMath.pitagoras(arr[2], arr[3]))

            break
            case 'HELP':
                message.channel.send('Funções válidas:\n. BHASKARA a b c\n. PITAGORAS cateto1 cateto2' +
                '\nx + y\nx - y\nx * y\nx / y')

            break
            default:
                message.channel.send(`Função inválida! Digite "${prefix} help" para saber mais.`)
        }
    }
    
    //Checa se o comando é uma operação
    if(isNaN(Number(arr[0])) === false){
        const [numero1, operation, numero2] = arr

        //Checa a operação que deve ser realizada
        switch (operation) {
            case '+':
                message.channel.send(funcMath.sum(numero1, numero2))
            break
            case '-':
                message.channel.send(funcMath.sub(numero1, numero2))
            break
            case '*':
                message.channel.send(funcMath.mult(numero1, numero2))
            break
            case '/':
                message.channel.send(funcMath.div(numero1, numero2))
            break
        }
    }
})

client.login(token)
