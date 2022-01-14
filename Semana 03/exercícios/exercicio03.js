
function pjPF(salarioPJ, salarioPF){

    

    let finalPF = salarioPF + (salarioPF * 0,33) + salarioPF + 700 + (salarioPF * 0,08)
    
    if (salarioPJ > finalPF){
        return "melhor PJ"
        }

        else 
        
        return "melhor CLT"

    }




console.log(pjPF(12000,5000))