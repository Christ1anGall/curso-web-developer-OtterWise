/*
15 -Elabore um programa que receba três valores como entrada e mostre eles em ordem crescente no console.
*/

let num1
let num2
let num3

let primeiroMaior
let segundoMaior
let ultimoNumero

num1 = 100;
num2 = 2500;
num3 = 300;


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

if (num1 < segundoMaior){
    ultimoNumero = num1
}
else if (num2 < segundoMaior) {   
    ultimoNumero = num2
}
else if (num3 < segundoMaior){   
    ultimoNumero = num3
}

console.log(primeiroMaior , segundoMaior, ultimoNumero);