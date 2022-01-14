
const arrayData = [
{ nome: "João",     idade: 30, salario: 15000, senioridade: "senior" },
{ nome: "Pedro",    idade: 22, salario: 10000, senioridade: "pleno" },
{ nome: "Carla",    idade: 27, salario: 1500,  senioridade: "estagio" },
{ nome: "Lucas",    idade: 35, salario: 15000, senioridade: "senior" },
{ nome: "Roberta",  idade: 45, salario: 5000,  senioridade: "junior" },
{ nome: "Patrícia", idade: 19, salario: 10000, senioridade: "pleno" },
{ nome: "Joana",    idade: 23, salario: 5000,  senioridade: "junior" },
]


function listArrayDownUpIdade(entryArray)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].idade < entryArray[index].idade) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
  
        }   
        console.log(entryArray[index])
        
    }
    
    
}

function listArrayUpDownIdade(entryArray)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].idade > entryArray[index].idade) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
  
        }   
        console.log( entryArray[index])
        
    }
    
    
}

function listArrayDownUpMoney(entryArray)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].salario < entryArray[index].salario) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
  
        }   
        console.log( entryArray[index])
        
    }
    
    
}

function listArrayUpDownMoney(entryArray)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].salario > entryArray[index].salario) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
  
        }   
        console.log( entryArray[index])
        
    }
    
    
}

function listArrayDownUpBetter(entryArray)
{
    if(entryArray.senioridade == "junior" || "Junior"){
        entryArray.senioridade = 1
    }

    else if (entryArray.senioridade == "pleno" || "Pleno"){
        entryArray.senioridade = 2
    }

    else if (entryArray.senioridade == "senior" || "Senior"){
        entryArray.senioridade = 3
    }

    else if (entryArray.senioridade == "estagio" || "Estagio"){
        entryArray.senioridade = 0
    }


    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].senioridade < entryArray[index].senioridade) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
  
        }  

        if(entryArray.senioridade == 1){
            entryArray.senioridade = "Junior"
        }
    
        else if (entryArray.senioridade == 2 ){
            entryArray.senioridade = "Pleno"
        }
    
        else if (entryArray.senioridade == 3 ){
            entryArray.senioridade = "Senior"
        }
    
        else if (entryArray.senioridade ==  0){
            entryArray.senioridade = "estagio"
        }
            console.log( entryArray[index]) 
        
        
    }
    
    
}

function listArrayUpDownBetter(entryArray)
{

    if(entryArray.senioridade == "junior" || "Junior"){
        entryArray.senioridade = 1
    }

    else if (entryArray.senioridade == "pleno" || "Pleno"){
        entryArray.senioridade = 2
    }

    else if (entryArray.senioridade == "senior" || "Senior"){
        entryArray.senioridade = 3
    }

    else if (entryArray.senioridade == "estagio" || "Estagio"){
        entryArray.senioridade = 0
    }

    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].senioridade > entryArray[index].senioridade) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
  
        }   

        
  
        console.log( entryArray[index])
        
    }
    
    
}



listArrayDownUpIdade(arrayData)
listArrayUpDownIdade(arrayData)
listArrayDownUpMoney(arrayData)
listArrayUpDownMoney(arrayData)
listArrayDownUpBetter(arrayData)
listArrayUpDownBetter(arrayData)
