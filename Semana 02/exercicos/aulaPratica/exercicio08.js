
    let input = 7;
    let output = "";

for (let i = 1; i <= input * 4; i++) {

  if (i % 4 === 0) {

    output += "PUM";

    console.log(output);

    output = "";

  } 
  else {
    output += i + " ";
  }
}

    
/*
let value = 3



 let valueElement

//for coloca PUM na quarta posição, não subistituindo o valor naquela posição. 

for( let index1 = 1; index1 <= value * 4 ; index1++){   
    
        if(index1 % 4 == 0 ){
        element = "PUM"         
        }

        else{
        element = index1 
        }  

        valueElement = element
    }
    

*/
/*

for(let index1 = 0; index1 < 4; index1++){
    array[index1] = index3++         
 }


/*
 if(array[3] % 4 == 0){
    array[3] = " PUM"
}
console.log(`${array}`)

*/