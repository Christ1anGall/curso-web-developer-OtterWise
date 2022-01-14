let array = [-5, -1467, 32, 28, 65, -2, -49, -63, 22, -13, 255]


function lazyNumbersPositive(array1){

    let array2 = []
    let hMN = 0


    for(index = 0; index < array1.length; index++){
            
        if(array1[index] > 0)
        {  
            array2 += " " + array1[index]
            
        }
        
    }
    
    
    for (let index = 0; index < array1.length; index++) {
        
        
    
        if(array1[index] > 0){

            hMN++

        }
    }
        
    

    return array2 + " temos: " +  hMN + " positivos"
}


function lazyNumbersNegative(array1){

    let array2 = []



    for(index = 0; index < array1.length; index++){
            
        if(array1[index] < 0)
        {  
            array2 += " " + array1[index]
            
        }
       
    }

    let hMN = 0
    for (let index = 0; index < array1.length; index++) {
        
        
    
        if(array1[index] < 0){

            hMN++

        }
    }
    return array2 + " temos: " +  hMN + " negativos"
}

function lazyNumbersPar(array1){

    let array2 = []



    for(index = 0; index < array1.length; index++){
            
        if((array1[index] % 2) == 0)
        {  
            array2 += " " + array1[index]
            
        }
       
    }
    let hMN = 0
    for (let index = 0; index < array1.length; index++) {
        
        
    
        if((array1[index] % 2) == 0){

            hMN++

        }
    }
    return array2 + " temos: " +  hMN + " pares"
    
}

function lazyNumbersInpar(array1){

    let array2 = []



    for(index = 0; index < array1.length; index++){
            
        if((array1[index] % 2) != 0)
        {  
            array2 += " " + array1[index]
            
        }
       
    }
    let hMN = 0
    for (let index = 0; index < array1.length; index++) {
        
        
    
        if((array1[index] % 2) != 0){

            hMN++

        }
    }
    return array2 + " temos: " +  hMN + " Impares"
    
}


    
    


console.log(`
Positivos: ${lazyNumbersPositive(array)} 
Negativos:${lazyNumbersNegative(array)} 
Pares:${lazyNumbersPar(array)}
impares:${lazyNumbersInpar(array)}
`)
