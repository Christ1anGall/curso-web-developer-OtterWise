/*
Pegue um valor de entrada e calcule o menor númerode notas possíveis(cédulas) no qual o valor pode ser decomposto.
 As notas consideradas são de 100, 50, 20, 10, 5, 2 e 1. 
 A seguir mostre o valor lido e a relação de notasnecessárias.
*/

function numeroCedulas(value)
{
    let notas100 = Math.floor(value / 100) ;
    let notas50 = Math.floor((value % 100 ) / 50);
    
    let notas20 = Math.floor(((value % 100 ) - (notas50 * 50)) / 20);
    let notas10 = Math.floor(((value % 100 )-(notas50 * 50)-(notas20 * 20)) / 10);
    let notas5 = Math.floor(((value % 100 )-(notas50 * 50)-(notas20 * 20)-(notas10 * 10)) / 5);
    let notas2 = Math.floor(((value % 100 )-(notas50 * 50)-(notas20 * 20)-(notas10 * 10)-(notas5 * 5)) / 2);
    let notas1 = Math.floor(((value % 100 )-(notas50 * 50)-(notas20 * 20)-(notas10 * 10)-(notas5 * 5) - (notas2 * 2))/ 1);


console.log(`para ${value} serão

${notas100} nota(s) de R$100,00
${notas50}  nota(s) de R$50,00
${notas20}  nota(s) de R$20,00
${notas10}  nota(s) de R$10,00
${notas5}  nota(s) de R$05,00
${notas2}  nota(s) de R$02,00
${notas1}  moeda(s) de R$01,00`) ;

}




numeroCedulas(151)