/*
06 -Uma imobiliária paga às pessoas corretoras de imóveis um salário fixo por ês e uma comissão de acordo com o valor de vendas realizado por elas.
Faça um programa que calcule e imprima no console o valor total recebido pela pessoa corretora de imóveis no mês.
Os valores de entrada serão:
Salário Fixo;
Valor total vendido;
Porcentagem da comissão.

Exemplos de Entrada 1:2000 3000 01
Exemplos de Entrada 2:5000 100000 10
Exemplos de Saída 1:
Valor Mensal: R$ 2300
Exemplos de Saída 2:
Valor Mensal: R$ 15000
*/

let salarioFixo = 4900
let valorVendido = 9800000
let comissao = 2


comissao = comissao / 1000;

console.log("parabens, você recebeu hoje: R$" + (salarioFixo + (valorVendido * comissao)) );

