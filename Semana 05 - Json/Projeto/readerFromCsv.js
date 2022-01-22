import fs from 'fs'
import { finished } from 'stream';

const lista = fs.readFileSync('./lista.csv', { encoding: 'utf-8', flag: 'r' });

const newLista1 = lista.split("\r\n")

const newLista2 = newLista1[0].split(',')
const newLista3 = newLista1[1].split(',')
const newLista4 = newLista1[2].split(',')
const newLista5 = newLista1[3].split(',')
const newLista6 = newLista1[4].split(',')

const fileSystemFinal = [{
    [newLista2[0]]: parseInt(newLista3[0]),
    [newLista2[1]]: newLista3[1],
    [newLista2[2]]: newLista3[2],
},
{
    [newLista2[0]]: parseInt(newLista4[0]),
    [newLista2[1]]: newLista4[1],
    [newLista2[2]]: newLista4[2],
},
{
    [newLista2[0]]: parseInt(newLista5[0]),
    [newLista2[1]]: newLista5[1],
    [newLista2[2]]: newLista5[2],
},
{
    [newLista2[0]]: parseInt(newLista6[0]),
    [newLista2[1]]: newLista6[1],
    [newLista2[2]]: newLista6[2],
}


];
console.log((fileSystemFinal));


const saveToJSON = (infos, fileName) => {
    const parsedInfo = JSON.stringify(infos)
    fs.writeFileSync(fileName, parsedInfo)
}

saveToJSON(fileSystemFinal, 'arquivo.json')

