//1. Através da string “Maria, Paulo, Moisés, Joel, Ana”, imprima todos os nomes um em cada linha no console
const stringPrinting = " Maria, Paulo, Moisés, Joel, Ana"
const splitedNames = stringPrinting.split(",");





for (let index = 0; index < splitedNames.length; index++) 
{
   
    console.log(splitedNames[index].trim(","))
}

