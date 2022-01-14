let arrayNote = [6, 8, 7,]




function notaMedia (array){
let arrayMedia = 0 

for(let index = 0; index < array.length; index++){

    arrayMedia += arrayNote[index]
    
}

return arrayMedia/array.length
}

console.log(notaMedia(arrayNote))