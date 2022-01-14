const dataBase = 
[
{ cod: "8568014003",    nome: "mais esperto que o diabo",   autor: "Napoleon Hill",          valor: 24.6,    quantidadeVendido: 17675,  estoque: 10 },
{ cod: "8550801488",    nome: "pai rico, pai pobre",        autor: "Robert T. Kiyosaki",     valor: 42.71,   quantidadeVendido: 8992,   estoque: 20 },
{ cod: "8547001085",    nome: "antifragil",                 autor: "Nassim Nicholas Taleb",  valor: 70.99,   quantidadeVendido: 1700,   estoque: 30 },
{ cod: "8595080801",    nome: "o investidor inteligente",   autor: "Benjamin Graham",        valor: 36.3,    quantidadeVendido: 8445,   estoque: 40 },
{ cod: "8539004119",    nome: "o poder do hábito",          autor: "Charles Duhigg",         valor: 48.9,    quantidadeVendido: 14581,  estoque: 50 },
{ cod: "8543102146",    nome: "essencialismo",              autor: "Greg Mckeown",           valor: 36.43,   quantidadeVendido: 9730,   estoque: 60 },
{ cod: "9788539003839", nome: "rápido e devagar",           autor: "Daniel Kahneman",        valor: 50.93,   quantidadeVendido: 5703,   estoque: 40 },
{ cod: "8551003429",    nome: "princípios",                 autor: "Ray Dalio",              valor: 89.9,    quantidadeVendido: 3707,   estoque: 05 },
{ cod: "855717358X",    nome: "gestão de alta performance", autor: "Andrew S. Grove",        valor: 34.94,   quantidadeVendido: 442,    estoque: 04 },
{ cod: "8550805246",    nome: "empresas feitas para vencer",autor: "Jim Collins",            valor: 44.2,    quantidadeVendido: 824,    estoque: 03 },
{ cod: "855080455X",    nome: "avalie o que importa",       autor: "John Doerr",             valor: 40.9,    quantidadeVendido: 797,    estoque: 09 },
];

function bestSeller(entryArray)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].quantidadeVendido > entryArray[index].quantidadeVendido) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
            
        }   
        return "O autor mais vendido é: " + entryArray[index].autor
        
    }
    
    
}
bestSeller(dataBase)



function valueDown(entryArray,value)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
            if ( entryArray[index].valor < value) 
            { 
               
                console.log(entryArray[index])
            }
            
  
          
        
        
    }
    
    
}



function valueUp(entryArray,value)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
            if ( entryArray[index].valor > value) 
            { 
               
                console.log(entryArray[index])
            }
            
  
          
        
        
    }
    
    
}



function bookName(entryArray,string)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
            if ( entryArray[index].nome.indexOf(string) !== -1) 
            { 
               
               console.log( entryArray[index])
            }
           
          
        
        
    }
    
    
}


function bookAutor(entryArray,string)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
            if ( entryArray[index].autor.indexOf(string) !== -1) 
            { 
               
                console.log( entryArray[index])
               
            }
           
            

           
            
  
          
        
        
    }
    
    
}


function bookCod(entryArray,string)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
            if ( entryArray[index].cod.indexOf(string) !== -1) 
            { 
               
                console.log( entryArray[index])
               
            }
           
            

           
            
  
          
        
        
    }
    
    
}


function stockList(entryArray)
{
    for(let index = 0; index < entryArray.length ; index++)
    {
        for(let index2 = (index + 1) ; index2 < entryArray.length ; index2++)
        {
            if ( entryArray[index2].estoque > entryArray[index].estoque) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
            
        }   
        console.log("O livro: " + entryArray[index].nome + ", possui " + entryArray[index].estoque + " unidades")
        
    }
    
    
}


function top_x_Seller(entryArray, value)
{
    for(let index = 0; index < value ; index++)
    {
        for(let index2 = (index + 1) ; index2 < value ; index2++)
        {
            if (index2 < value && entryArray[index2].quantidadeVendido > entryArray[index].quantidadeVendido) 
            {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]  
                entryArray[index] = aux   
               
               
            }
            
            
        }   
        console.log("O Top "+ (index+1) +" mais vendido é: " + entryArray[index].nome)
        
    }
    
    
}

function multiplyByValue(entryArray,value)
{
  

    for(let index = 0; index < entryArray.length ; index++)
    {
        let porcent = (value/100) * entryArray[index].valor
        entryArray[index].valor = entryArray[index].valor + Math.floor(porcent)
            
            
            
          
       console.log(entryArray[index])
        
    }
    
    
}

multiplyByValue(dataBase, 8)






