/*
Pegue um valor de entrada e calcule o menor númerode notas possíveis(cédulas) no qual o valor pode ser decomposto.
 As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
 A seguir mostre o valor lido e a relação de notasnecessárias.
*/

function numeroCedulas(value)
{
    let notas100 = 0
    let notas50 = 0 
    let notas20 = 0
    let notas10 = 0
    let notas5 = 0
    let notas2 = 0
    let notas1 = 0


let value100 = Math.floor(value / 100) 

let value50 = Math.floor((value % 100 ) / 50)

let value20 = Math.floor(((value % 100 ) - (value50 * 50)) / 20)

let value10 = Math.floor(((value % 100 )-(value50 * 50)-(value20 * 20)) / 10)

let value05 = Math.floor(((value % 100 )-(value50 * 50)-(value20 * 20)-(value10 * 10)) / 5)

let value02 = Math.floor(((value % 100 )-(value50 * 50)-(value20 * 20)-(value10 * 10)-(value05 * 5)) / 2)

let value01 = Math.floor(((value % 100 )-(value50 * 50)-(value20 * 20)-(value10 * 10)-(value05 * 5) - (value02 * 2))/ 1)



console.log(`para ${value} serão

${value100} nota(s) de R$100,00
${value50}  nota(s) de R$50,00
${value20}  nota(s) de R$20,00
${value10}  nota(s) de R$10,00
${value05}  nota(s) de R$05,00
${value02}  nota(s) de R$02,00
${value01}  moeda(s) de R$01,00`) 

}




numeroCedulas(151)