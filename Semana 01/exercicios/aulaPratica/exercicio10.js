/*
10 -Calcule a média de consumo de combustível utilizada em uma viagem e otempo levado durante a viagem.
Você deve imprimir no console esses doisvalores:
Os valores de entrada serão:
Distância percorrida na viagem em km;
Velocidade do automóvel em km/h;
Quantidade de combustível gasto em litros.
Exemplo de Entrada:2408020E
xemplo de Saída:
Média de consumo: 12 km/lTempo da viagem: 3 horas
*/

let distanciaKm
//velocidade em KM/h
let velocidadeKm
//distancia em KM/h
let combustivelGasto

distanciaKm = 3150;
velocidadeKm = 80;
combustivelGasto = 210;

let trip = "a media de consumo foi de: " + ( distanciaKm / combustivelGasto )+ " L/km com um tempo de: " + (distanciaKm / velocidadeKm) +" horas" 

console.log(trip)
