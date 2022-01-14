/*
2. Faça uma função que recebe a idade de um nadador e retorna a categoria desse nadador de acordo com a tabela abaixo: 
Idade - Categoria
5 a 7 anos - Infantil A
8 a 10 anos - Infantil B
11 - 13 anos - Juvenil A
14 - 17 anos - Juvenil B
Maiores de 18 anos (inclusive) - Adulto
*/

function idadeCategoria(idade){
    
        if (idade >= 5 && idade <= 7){
            return "Infantil A"
        } 
        else if (idade >= 8 && idade <= 10){ 
            return "Infantil B"   
        }

        else if (idade >= 11 && idade <= 13){ 
            return "Juvenil A" 
        }
        else if (idade >= 14 && idade <= 17){
            return "Juvenil B" 
        }
        else if (idade >= 18){
            return "Adulto"}

       
}

let resultado = idadeCategoria(18)
console.log(resultado)