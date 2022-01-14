/*Crie um algoritmo que tem como entrada um array de números e imprime no console a soma dos elementos sendo cada um deles multiplicado pelo seu índice.
    Exemplo entrada: [5, 9, 10, 6]
    Exemplo Saída: 47
    */



    const array01 = [5, 9, 10, 6 ] 
    let array02 = [0,0,0,0]
    let element01
    let index
  


for (index = 0; index < array01.length; index++) {
    const element = array01[index];

     element01 = element * index
     array02[index] = element01
    }
    
    
    console.log(array02[0]+array02[1]+array02[2]+array02[3])
  
            
// algoritmo criado devido a snapses criadas pela Hoegaarden

    



      
    