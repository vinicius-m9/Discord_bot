const Discord = require('discord.js')
const client = new Discord.Client()

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', message =>{
    const arr = message.content.split(' ')
    const mark = arr[0].toUpperCase()

    if(mark === 'BHASKARA'){
        const a = Number(arr[1]), b = Number(arr[2]), c = Number(arr[3])
        const delta = (b**2)-(4*a*c)
        
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
    } else if(mark === 'PITAGORAS'){
        const cat1 = Number(arr[1]), cat2 = Number(arr[2])

        message.channel.send(`Hipotenusa = ${Math.sqrt((cat1**2)+(cat2**2))}`)
    } else {
        const [num1, operation, num2] = arr

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

client.login('token')
