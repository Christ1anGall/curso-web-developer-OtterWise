/*
19 -Crie uma função chamada checkSignal que possui um parâmetro
 e imprimeno console:"x é positivo" se o número for positivo;
 "x é negativo" se o número for negativo.

 x deve ser substituído pelo número passado como argumento.
 Exemplo de Entrada:
 10
 ------------------
 5

 Exemplo de Saída:

 10 é positivo
 ------------------
 5 é negativo
*/

function checkSignal(signal){
    if (signal > 0){
   console.log( signal + " é positivo")
    
}
    else
    console.log( signal + " é negativo")

}


checkSignal(-5)