/*
09 -Tendo como informação dois números, faça um programaque imprima natela qual deles é o MAIOR e qual deles é o menor.
Caso os números sejam iguais, informe que eles são iguais.
Os valores de entrada 
serão:Número 1;Número 2;
Exemplo de Entrada:2 5
-----------------
7 7
Exemplo de Saída:5 é maior que 2
-----------------
7 é igual a 7
*/

let numero01
let numero02

numero01 = 176
numero02 = 995

if (numero01 > numero02)
{
    console.log(numero01+" é maior que "+numero02);
}
else if (numero01 < numero02)
{
    console.log(numero02+" é maior que "+numero01);
}
else
 {
    console.log(numero02+" é igual ao"+numero01);
}