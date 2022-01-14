/*
Crie uma função que recebe como argumento um valor em segundos
calcula e retorne uma string formatada HH:MM:SS (horas:minutos:segundos) .
Exemplo de Entrada:
600
-----------------
33567
Exemplo de Saída:
0:10:0
-----------------
9:19:27
*/

function segundosHora(horaEmSegundos)
{ 
let horas = Math.floor((horaEmSegundos/60) / 60)
let minutos = Math.floor((horaEmSegundos-((horas * 60)*60))/60)

let segundos = Math.floor(horaEmSegundos % 60)





console.log( horas + ":" + minutos+ ":"+ segundos)
}



segundosHora(33600)

