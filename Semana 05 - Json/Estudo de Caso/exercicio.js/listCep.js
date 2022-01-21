
/*
2. Crie um programa que recebe uma lista de CEP’s e gera um arquivo JSON contendo as informações de logradouro, bairro, localidade, uf e o CEP consultado para cada um dos CEP’s válidos.
    Observação: escreva o arquivo apenas com ceps válidos e que tiveram retorno da api.
*/

import { generetionCep } from "./generationCep.js"
import axios from 'axios'

const cepss = generetionCep(29000000, 29099999)


const listCep = async (cep) => {
    try {
        const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return data

    } catch (error) {
        console.log("Error, Que a Força esteja com você")


    }


}



export const arrayCep = cepss.map((cep) => {

    const { rua, bairro, localidade, estado } = listCep(cep)
    const dataCep = {
        rua,
        bairro,
        localidade,
        estado,
    }
    return dataCep

})


