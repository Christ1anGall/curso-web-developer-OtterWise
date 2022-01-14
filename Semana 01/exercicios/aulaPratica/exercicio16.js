/*
16- Escreva um programa que receba como entrada dois valores.
Após, o programa deve mostrar uma mensagem “São Múltiplos” ou “Não são Múltiplos”,
indicando se os valores recebidos como entrada são múltiplos entre si.
*/

function ehMultiplo (nume1, nume2){

       if (nume1 % nume2 == 0)
       {
        return "São Multiplos"
        }
      else if (nume2 % nume1 == 0)
        {
         return "São Multiplos"
         }
         
        else 
        {
        return "Não São Multiplos"
         }

      
   
        
    }

 console.log(ehMultiplo(34,7))