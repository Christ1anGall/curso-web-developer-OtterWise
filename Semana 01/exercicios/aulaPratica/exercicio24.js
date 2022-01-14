/*
Uma pessoa desenvolvedora recebe frequentemente propostas de trabalho pela CLT(Consolidação das Leis Trabalhistas) e pela PJ (Pessoa Jurídica).
Considerando que o trabalho como CLT envolve férias, 13° salário, R$ 700 de benefício e 8% mensal referente ao FGTS.
Faça um programa que receba como entrada os dois valores mensais oferecidos e  tome a decisão informando qual proposta a pessoa deve aceitar.
*/


function pjPF(salarioPJ, salarioPF){

    

    let finalPF = salarioPF + (salarioPF * 0,33) + salarioPF + 700 + (salarioPF * 0,08)
    
    if (salarioPJ > finalPF){
        return "melhor PJ"
        }

        else 
        
        return "melhor CLT"

    }




console.log(pjPF(18000,7500))