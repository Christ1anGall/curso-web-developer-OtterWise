
let array01 = [

{nome: 'Marcos',    notas:  [10, 7, 2]},
{nome: 'Michele',   notas:  [10, 10, 10]},
{nome: 'Pedro',     notas:  [3, 10, 9]},
{nome: 'Andressa',  notas:  [6, 6, 8]},
{nome: 'Cristiana', notas:  [7, 9, 2]}

]


let notas = []

for(let index = 0; index < array01.length; index++){
   notas = array01[index].notas  

   for (let index1 = 0; index1 < notas.length; index1++) {
        notasMedia = (notas[index1] + notas[index1 +1 ] + notas[index1 +2 ]) / 3 
     if(notasMedia > 7){
         console.log(array01[index].nome)
     }

 }
    
}


//HAHA habilidade começando a tomar conta, pode fazer ctrl + z pra ver. 
