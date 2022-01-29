import fs from 'fs'


const lista = fs.readFileSync('./lista.csv', { encoding: 'utf-8', flag: 'r' });

const newLista1 = lista.split("\r\n")


const novalinha = newLista1.map((element) => {
    return element.split(',')

})

const fileSystemFinal = novalinha.map((element, index) => {
    return {
        [novalinha[0][0]]: parseInt(element),
        [novalinha[0][1]]: element[1],
        [novalinha[0][2]]: "R$" + element[2].replace(".", ","),
    }
})

fileSystemFinal.shift()

const saveToJSON = (infos, fileName) => {
    const parsedInfo = JSON.stringify(infos)
    fs.writeFileSync(fileName, parsedInfo)
}

saveToJSON(fileSystemFinal, 'arquivo.json')


