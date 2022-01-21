
/*
2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
    Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.
*/

import { generetionCep } from "./generationCep.js"
import axios from 'axios'

const cepss = generetionCep(29000000, 29099999)


const listCep = async (cepList) => {
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cepList}/json/`)
        return data

    } catch (error) {
        console.log("Error, Que a Força esteja com você")


    }


}


export const arrayCep = cepss.map(async (cepArray) => {
    const { cep, logradouro, bairro, localidade, uf, ddd } = await listCep(cepArray)
    const dataCep = {
        cep,
        logradouro,
        bairro,
        localidade,
        uf,
        ddd,
    }
    return dataCep

})


