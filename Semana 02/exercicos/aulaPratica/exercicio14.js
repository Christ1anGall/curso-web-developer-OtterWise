const array01 = [-11,2,3,4,-5,6,7,8,-19,10];



function lessValue(value) {
    

let lessValue1 = 0

let index1

for (let index = 0; index < value.length; index++) {

    if(array01[index] < lessValue1){
        lessValue1 = array01[index] 
       index1 = index
         
    }

    array01[index+1]
   
} 
console.log("Posição: " + lessValue1)
console.log("Posição: " + index1)
}

lessValue(array01);
