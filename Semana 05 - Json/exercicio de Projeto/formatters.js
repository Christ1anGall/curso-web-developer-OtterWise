/*Crie um arquivo formatters.js:
Nesse arquivo crie uma função chamada formatDate que recebe uma data como parâmetro e, utilizando a date - fns, retorna essa data no formato “DD / MM / YYYY”.
Esse arquivo deve exportar a função formatDate.

*/


import getDay from "date-fns/getDay/index.js"
import getMonth from "date-fns/getMonth/index.js"
import getYear from "date-fns/getYear/index.js"
import format from 'date-fns/format/index.js'

const dateNew = new Date()

const formatDate = (data) => {



    return (getDay(data) + "/" + getMonth(data) + "/" + getYear(data))

}




console.log(formatDate(dateNew))
console.log(format(dateNew))



