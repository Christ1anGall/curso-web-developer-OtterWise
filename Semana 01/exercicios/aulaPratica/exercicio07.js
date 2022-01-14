/*Tendo como informação dois valores, valor1 e valor2, faça um programa que imprima os dois valores no console.
Após imprimir, troque a informação devalor1 pela informação do valor2 e imprima no console novamente.
Exemplo de Entrada 1: 312
Exemplo de Entrada 2: 2523
Exemplo de Saída 1: Valor 1 = 3  Valor 2 = 12  Valor 1 = 12  Valor 2 = 3
Exemplo de Saída 2: Valor 1 = 25 Valor 2 = 23  Valor 1 = 23  Valor 2 = 25
*/



let valor1 = 165;
let valor2 = 995;


console.log("valor 1: " + valor1);
console.log("valor 2: " + valor2);

let valorTemp = valor2;
valor2 = valor1
valor1 = valorTemp


console.log("valor 1: " + valor1);
console.log("valor 2: " + valor2);