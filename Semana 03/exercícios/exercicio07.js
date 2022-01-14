let array01 = [1, 8, 6, 13, 7, 9, 15, 22, 356, 4, 3];




function arrayMultiplication (array, multiplication){
let array10 = [];

for(index = 0; index < array.length; index++){

    array10[index] = array[index] * multiplication

}
console.log(array10)
}

arrayMultiplication(array01,10)