/*
14 -Faça um programa que receba de entrada três valores e mostre no console a soma dos dois maiores.
*/

let num1
let num2
let num3

let primeiroMaior
let segundoMaior

num1 = 10;
num2 = 25;
num3 = 30;


if ((num1 > num2) && (num1 > num3)){
     primeiroMaior = num1
}
else if ( (num2 > num1) && (num2 > num3) ){   
    primeiroMaior = num2
}
else if ( (num3 > num1) && (num3 > num2) ){   
    primeiroMaior = num3
}

if (((num1 > num2) || (num1 > num3)) && (num1 < primeiroMaior)){
    segundoMaior = num1
}
else if ( ((num2 > num1) || (num2 > num3)) && (num2 < primeiroMaior)){   
   segundoMaior = num2
}
else if ( ((num3 > num1) || (num3 > num2)) && (num3 < primeiroMaior) ){   
   segundoMaior = num3
}



console.log(primeiroMaior + segundoMaior);