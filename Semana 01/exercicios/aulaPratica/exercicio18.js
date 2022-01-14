/*
18- Escreva um programa que receba como entrada três números que serão armazenados nas variáveis valueOne, valueTwo e valueThree respectivamente.
Tendo esses valores, mostre-os na tela na ordem em que estão armazenados.
Após ter mostrado 
faça trocas em que ao final valueTwo assuma o valor de valueThree, valueThree assuma o valor de valueOne e valueOne assuma o valorde valueTwo.
Mostre ao final os valores atualizados.
*/

let valueOne = 6
let valueTwo = 9
let valueThre = 8


console.log(valueOne);
console.log(valueTwo);
console.log(valueThre);

temp = valueTwo;
valueTwo = valueThre;
valueThre = valueOne;
valueOne = temp

console.log(valueOne);
console.log(valueTwo);
console.log(valueThre);



