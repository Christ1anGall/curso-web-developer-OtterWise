/*
1. Crie uma função que gere uma lista de 20 CEP’s aleatórios.Dica: uma das faixas de CEP válidas vai de 29000000 a 29099999. Use essa informação para gerar os CEP’s dentro dessa faixa.
Math.floor
Math.random
*/


export const generetionCep = (min, max) => {

    const ceps = []

    for (let index = 0; index <= 20; index++) {
        ceps[index] = Math.floor(Math.random() * (max - min) + min)
        //ceps[index] = { [`cep: ${index}`]: Math.floor(Math.random() * (max - min) + min) } objeto com cep: 1 ... cep: N + cep

    }

    return ceps

}

