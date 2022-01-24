/*Crie um arquivo formatters.js:
Nesse arquivo crie uma função chamada formatDate que recebe uma data como parâmetro e, utilizando a date - fns, retorna essa data no formato “DD / MM / YYYY”.
Esse arquivo deve exportar a função formatDate.

*/
import format from "date-fns/format/index.js"

const dateNew = new Date()

const newDate = format(dateNew, 'dd/MM/yyyy')

console.log(newDate)


