const array = [10, 80, 60, 130, 70, 90, 150, 220, 3560, 40, 30]




function multiplicaPorDez(value){
    return value * 10
}

function dividePorCinco(value){
    return value / 5
}


function modifyingByFunction(entryArray,actFunction)
{
    

    for(let index = 0; index < entryArray.length ; index++)
    {

        console.log(actFunction(entryArray[index]))
        
            
            
            
          
    
        
    }
    
    
}



modifyingByFunction(array,dividePorCinco)