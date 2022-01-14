/*
Um banco vai liberar linhas de crédito só para servidores públicos. 
Caso o(a)servidor(a) for professor(a) terá uma linha de crédito especial com uma taxa dejuros menor. 
Crie um algoritmo que possui três valores de entradas:

 nomecompleto (string), 
 servidor (boolean), 
 professor (boolean) 
 e que imprime uma mensagem dizendo se a pessoa tem acesso a linha de crédito, se sim, qual linhade crédito.
 
 Exemplo de Entrada 1:
 Nome Completo: Juca da Silva
 Servidor: false
 Professor: true
 
 Exemplo de Saída 1:
 Juca da Silva infelizmente você não tem uma linha de crédito disponível.
 

 Exemplo de Entrada 2:
 Nome Completo: Márcia dos Santos
 Servidor: true
 Professor: true
 
 Exemplo de Saída 1:
 Parabéns Márcia dos Santos! Você tem acesso a nossa linha de crédito especial!
 
 Exemplo de Entrada 3:
 Nome Completo: Marcelo Lima
 Servidor: true
 Professor: false
 
 Exemplo de Saída 3:
 Marcelo Lima, você tem acesso a nossa linha de crédito para servidores.
*/


let nomeCompleto
let servidor
let professor
let credito

nomeCompleto = "Christian Gall";
servidor = false;
professor = false;


if ((servidor) && (professor)){
    credito = " Você tem acesso a nossa linha de crédito especial!"
}
else if ((servidor) && (!professor)){
    credito = " Você tem acesso a nossa linha de crédito para servidores!"
}
else
{
    credito = " Você não tem uma linha de crédito disponível."
}



console.log("parabens " + nomeCompleto + credito);
