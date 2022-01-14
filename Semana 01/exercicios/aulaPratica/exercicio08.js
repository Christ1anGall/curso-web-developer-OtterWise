/*
Tendo como informações um nome e uma idade, faça um programa que imprima no console se a pessoa é maior ou menor de idade.
Os valores de entrada serão:Nome;Idade.
Exemplo de Entrada:Valter 23-----------------
Juliana 12
Exemplo de Saída:Valter é maior de idade.-----------------Juliana é menor de idade.
*/

let nome
let idade
let idadeResolvida

nome = "Christian";
idade = 29;

if (idade > 18) 

    {
    let maiorDeIdade = " é maior de idade."
    idadeResolvida = maiorDeIdade;
        } 
    
    else
    
    {
    let menorDeIdade = " é menor de idade."    
    idadeResolvida = menorDeIdade;
        }


console.log(nome + idadeResolvida);