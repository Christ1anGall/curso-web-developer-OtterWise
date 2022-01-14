let array = [-5,0,-3,-4,12]

let acumuladorPar = 0

let acumuladorImpar = 0

let acumuladorPositivo = 0

let acumuladorNegativo = 0


for(let index = 0; index < array.length; index++){
   
   
    if(array[index] > 0)
{
    acumuladorPositivo = acumuladorPositivo+1
    
}
    if(array[index] < 0)
{
    acumuladorNegativo = acumuladorNegativo+1
    
}
if(array[index] % 2 == 0)
{
    acumuladorPar = acumuladorPar+1
    
}

if(array[index] % 2 != 0)
{
    acumuladorImpar = acumuladorImpar+1
    
}


}
console.log(acumuladorPar + " valor(es) Par(es)")
console.log(acumuladorImpar + " valor(es) Impar(es)")
console.log(acumuladorPositivo + " valor(es) positivo(s)")
console.log(acumuladorNegativo + " valor(es) negativo(s)")

