/*
Uma pessoa desenvolvedora resolveu trabalhar como freelancer e quer conseguir colocar o preço nos trabalhos que ela irá pegar.
As informações que ela terá como entrada do seu programa são: 

O valor mensal do salário que ela quer ter; 
Ela irá trabalhar 160 horas no mês; 
O custo que ela tem com impostos e demais despesas empresariais
e o valor do salário mensal dela
, ou seja, 
ela irá precisar do dobro do valor que ela pretende adquirir como salário para conseguir pagar os seus impostos 
e ficar com o seu salário.
 Levando emconsideração que ela estipula o preço por horas que ela irá utilizar para concluiro projeto, 
 faça um programa que tenha como entrada variável a quantidade de horas e como saída no console o preço que custará esse projeto.
*/



function myWork( hourToWork){

let myPayment = 8000
let monthHourWork = 160  / 20
let tax = myPayment 
let myValueHour = (((myPayment + tax) / (monthHourWork * 20)) * hourToWork)
let howDay =  hourToWork / monthHourWork


return "ficará em " + myValueHour + " R$" + " e levará " + howDay + " dias uteis"
}

console.log(myWork(360))