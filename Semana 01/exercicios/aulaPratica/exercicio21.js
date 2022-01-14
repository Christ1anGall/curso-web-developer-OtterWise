/*
21 -Crie uma função chamada calculate que possuitrês parâmetros. 
O primeiro é uma string e os outros dois, números. 
A string será uma das seguintes opções:"soma", "subtrai", "multiplica", "divide". 
A função calculate deve retornar oresultado da operação (definida pela string) entre os dois números.Exemplo de Entrada:
"soma"35-----------------"divide"217Exemplo de Saída:8-----------------3
*/

function calculate(texto, num1, num2){

    if (texto === "soma"){
        return num1 + num2
    }
    if (texto === "subtrai"){
        return num1 - num2
    }
    if (texto === "multiplica"){
        return num1 * num2
    }
    if (texto === "divide"){
        return num1 / num2
    }


}

console.log(calculate("soma", 15,7))