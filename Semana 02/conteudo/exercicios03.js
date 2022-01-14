/*
Levando em consideração o array [6, 21, 9, 2, 50, 98, 1]
 crie uma função que mostra o maior numero da lista
*/

let array = [6, 21, 9, 2, 50, 98, 1]

function maiorNumero (numeroAlto) {
    

    for (let index = 0; index < numeroAlto.length; index++) {
        const element = numeroAlto[index];

        if (element < numeroAlto[index+1]){

            numeroAlto[index+1]
        }
        else if(element < numeroAlto[index+1]){
            index++
        }
        else if(element > numeroAlto[index+1] && element > numeroAlto[index-1]){
            console.log(numeroAlto[index])
        }
    }
}

maiorNumero(array)
