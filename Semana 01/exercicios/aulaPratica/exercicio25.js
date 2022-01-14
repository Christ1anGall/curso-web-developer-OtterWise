/*A mesma pessoa do exercício anterior quer saber o quanto ela irá pagar de imposto de renda em cada uma das propostas que ela recebe. 
Tendo por base atabela abaixo realize o cálculo do imposto de renda e informe a pessoa para ambas as propostas.
*/

let salarioPJ = 16000
let salarioPF = 7500


function pjPF(salarioPJ, salarioPF){

    

    let finalPF = salarioPF + (salarioPF * 0,33) + salarioPF + 700 + (salarioPF * 0,08)
    
    if (salarioPJ > finalPF)
    
    {
        return "melhor PJ e você irá paguar " + impostoSobreSalario(salarioPJ) + " de imposto."
    }


    else 
    {
        
        return "melhor CLT e você irá paguar " + impostoSobreSalario(salarioPF) + " de imposto."
    }




    //calculo do imposto encapsulado dentro da funcao pessoa fisica ou juridica
    function impostoSobreSalario(salario){

        let salarioAnual = salario * 12
        
        if (salarioAnual > 53565){
            return salarioAnual * 0.0275
        }
        else if (salarioAnual >= 42869 && salarioAnual <= 53565 ){
            return salarioAnual * 0.0225
        }
        
        else if (salarioAnual >= 32151 && salarioAnual <= 42869 ){
            return salarioAnual * 0.015
        }
        
        else if (salarioAnual >= 21453 && salarioAnual <= 32151 ){
            return salarioAnual * 0.0075
        }
        
        else {
        
        return 0
        }
        
        
        }

        
        
}









console.log(pjPF(salarioPJ,salarioPF))

