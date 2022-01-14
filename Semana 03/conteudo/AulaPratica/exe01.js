



const operations = (operationsMath, number01, number02) =>{
   return operationsMath === "soma" ? number01 + number02 
    :operationsMath === "subtrai" ? number01 - number02
    :operationsMath === "divide" ? number01 / number02
    :operationsMath === "multiplica" ? number01 * number02
    : "insira uma operação matematica e 2 numeros.";

}

console.log(operations("subtrai",2,7))



/*
//tabem da pra fazer assim |
                           |
                           |
                           |
                           V 

const operations = (operationsMath, number01, number02) =>
     operationsMath === "soma" ? number01 + number02 
     :operationsMath === "subtrai" ? number01 - number02
     :operationsMath === "divide" ? number01 / number02
     :operationsMath === "multiplica" ? number01 * number02
     : "insira uma operação matematica e 2 numeros.";
 
 
 
 console.log(operations("subtrai",556,215))
 */