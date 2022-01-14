const array = [1, -7, -23, 25, -19, 13, 10, -8, 52, -153, -127]


const filteredArrayPositive = array.filter(number => {
    return number > 0;
})

const filteredArrayNegative = array.filter(number => {
    return number < 0;
})

const filteredArrayInpar = array.filter(number => {
    return number % 2 === 0;
})

const filteredArrayPar = array.filter(number => {
    return number % 2 !== 0;
})

console.log(filteredArrayPositive + " existem " + filteredArrayPositive.length + " numeros positivos nesse array")


console.log(filteredArrayNegative + " existem " + filteredArrayNegative.length + " numeros negativos nesse array")


console.log(filteredArrayInpar + " existem " + filteredArrayInpar.length + " numeros impares nesse array")


console.log(filteredArrayPar + " existem " + filteredArrayPar.length + " numeros pares nesse array")