const Discord = require('discord.js')
const client = new Discord.Client()
const {token} = require('./config.json')

//Evento que dispara ao logar o bot
client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

//Evento que dispara ao receber mensagem em canais de texto
client.on('message', message =>{
    const arr = message.content.split(' ')
    
    //Checa se o comando é uma função
    if(message.content.startsWith('.') & arr[1] !== undefined){
        const mark = arr[1].toUpperCase()

        //Checa a função que foi chamada
        switch(mark){
            case 'BHASKARA':
                const a = Number(arr[2]), b = Number(arr[3]), c = Number(arr[4])
                const delta = (b**2)-(4*a*c)

                //Checa a validade da função
                if(isNaN(delta)){
                    message.channel.send('Função inválida! Digite ". help" para saber mais.')
                } else {
                   //Checa as condições de existência das raízes
                    if (delta > 0){
                        const x1 = ((-b)+(Math.sqrt(delta)))/(2*a)
                        const x2 = ((-b)-(Math.sqrt(delta)))/(2*a)
                        message.channel.send(`S = {${x1}, ${x2}}`)
                    } else if(delta === 0){
                        const x = (-b)/(2*a)
                        message.channel.send(`S = {${x}}`)
                    } else {
                        message.channel.send('Não possui raiz real.')
                    }
                }
                
            break
            case 'PITAGORAS':
                const cat1 = Number(arr[2]), cat2 = Number(arr[3])
                
                //Checa a validade da função
                if(isNaN(cat1) || isNaN(cat2)){
                    message.channel.send('Função inválida! Digite ". help" para saber mais.')
                } else {
                    message.channel.send(`Hipotenusa = ${Math.sqrt((cat1**2)+(cat2**2))}`)
                }
    
            break
            case 'HELP':
                message.channel.send('Funções válidas:\n. BHASKARA a b c\n. PITAGORAS cateto1 cateto2' +
                '\nx + y\nx - y\nx * y\nx / y')
            break
            default:
                message.channel.send('Função inválida! Digite ". help" para saber mais.')
        }
    //Checa se o comando é uma operação
    } else if(Number(arr[0]) !== NaN){
        const [num1, operation, num2] = arr

        //Checa a operação que deve ser realizada
        switch (operation) {
            case '+':
                message.channel.send(Number(num1)+Number(num2))
                break
            case '-':
                message.channel.send(Number(num1)-Number(num2))
                break
            case '*':
                message.channel.send(Number(num1)*Number(num2))
                break
            case '/':
                message.channel.send(Number(num1)/Number(num2))
                break
        }
    }
})

client.login(token)
