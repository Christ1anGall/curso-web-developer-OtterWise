const metaData = [{
    nome: 'Analu dos santos baptista',
    cpf: '14776213931',
    telefone: '8328008258'
}, { nome: 'Cláudio  da silva figueiredo ', cpf: '47187999887', telefone: '11988754092' }]

const newMetaData = metaData.forEach((element) => {
    console.log(element.nome)

    console.log(`${element.cpf[0] + element.cpf[1] + element.cpf[2]}.${element.cpf[3] + element.cpf[4] + element.cpf[5]}.${element.cpf[6] + element.cpf[7] + element.cpf[8]}-${element.cpf[9] + element.cpf[10]}`)




    if (element.telefone.length == 11) {
        console.log(`(${element.telefone[0] + element.telefone[1]}) ${element.telefone[2] + element.telefone[3] + element.telefone[4] + element.telefone[5] + element.telefone[6]}-${element.telefone[6] + element.telefone[7] + element.telefone[8] + element.telefone[9]} `)

    }
    else {

        console.log(`(${element.telefone[0] + element.telefone[1]}) ${element.telefone[2] + element.telefone[3] + element.telefone[4] + element.telefone[5]}-${element.telefone[6] + element.telefone[7] + element.telefone[8] + element.telefone[9]} `)

    }




})
