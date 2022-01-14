
let valor = 8
let array = []
let index3 = 1

for(let index = 1; index <= valor; index++){   
    
   for(let index1 = 0; index1 < 4; index1++){
       array[index1] = index3++         
    }
    if(array[3] % 4 == 0){
        array[3] = " PUM"
    }
   console.log(`${array}`)
}
    

