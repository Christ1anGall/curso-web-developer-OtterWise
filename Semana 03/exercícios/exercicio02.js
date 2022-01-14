
function joker(valor1,valor2) {
    
console.log("valor 1= " + valor1);
console.log("valor 2= " + valor2);

let valorTemp = valor2;
valor2 = valor1
valor1 = valorTemp

console.log("valor 1= " + valor1);
console.log("valor 2= " + valor2);

}

joker(3,12)
