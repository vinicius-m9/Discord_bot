const {prefix} = require('./config.json')

exports.sum = (valor1, valor2) => Number(valor1)+Number(valor2)

exports.sub = (valor1, valor2) => Number(valor1)-Number(valor2)

exports.mult = (valor1, valor2) => Number(valor1)*Number(valor2)

exports.div = (valor1, valor2) => Number(valor1)/Number(valor2)

exports.bhaskara = (A, B, C) => {
    const a = A, b = B, c = C
    const delta = (b**2)-(4*a*c)

    //Checa a validade da função
    if(isNaN(delta)){
        return (`Função inválida! Digite "${prefix} help" para saber mais.`)
    //Checa as condições de existência das raízes
    } else if(delta > 0){
        const x1 = ((-b)+(Math.sqrt(delta)))/(2*a)
        const x2 = ((-b)-(Math.sqrt(delta)))/(2*a)
        return (`S = {${x1}, ${x2}}`)
    } else if(delta === 0){
        const x = (-b)/(2*a)
        return (`S = {${x}}`)
    } else {
        return ('Não possui raiz real.')
    }
    
}

exports.pitagoras = (cat1, cat2) => {
    const cateto1 = cat1, cateto2 = cat2

    //Checa a validade da função
    if(isNaN(cateto1) || isNaN(cateto2)){
        return (`Função inválida! Digite "${prefix} help" para saber mais.`)
    } else {
        return (`Hipotenusa = ${Math.sqrt((cateto1**2)+(cateto2**2))}`)
    }
}