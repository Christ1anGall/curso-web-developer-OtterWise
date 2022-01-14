const array01 = [-11,2,3,40,-5,6,7,8,-19,10];



function choiceYourValue(value) {
    

let lessValue1 = 0

let index1

for (let index = 0; index < value.length; index++) {

    if(array01[index] < lessValue1){
        lessValue1 = array01[index] 
       index1 = index
         
    }

    array01[index+1]
   
} 
console.log("Menor Valor: " + lessValue1)
console.log("Posição: " + index1)



let lessValue2 = 0

let index2

for (let index = 0; index < value.length; index++) {

    if(array01[index] > lessValue2){
        lessValue2 = array01[index] 
       index2 = index
         
    }

    array01[index+1]
   
} 
console.log("Maior Valor: " + lessValue2)
console.log("Posição: " + index2)
}

choiceYourValue(array01);
