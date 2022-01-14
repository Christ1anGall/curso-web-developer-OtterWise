let number = 3


let newNumber = []
let newNumber2 = 0

for(let index = 0; index <= number; index++){
           
      newNumber[index] = index
     
    
}

for(let index2 = 0; index2 < newNumber.length; index2++){
    newNumber2 = newNumber[index2] + newNumber2
}

console.log(newNumber2)