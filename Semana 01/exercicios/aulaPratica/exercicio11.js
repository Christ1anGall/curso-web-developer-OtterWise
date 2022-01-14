/*
Tendo como informação os três lados de um triângulo faça um programaque imprima na tela se ele é EQUILÁTERO, ISÓSCELES ou ESCALENO.

OBS:
Triângulo Equilátero → Possui os 3 lados iguais;
Triângulo Isósceles → Possui 2 lados iguais;
Triângulo Escaleno → Possui 3 lados diferentes.

Os valores de entrada serão:Lado 1;Lado 2;Lado 3.

Exemplo de Entrada:10 5 10
-----------------
2 1 5

Exemplo de Saída:
Triângulo Isósceles
-----------------
Triângulo Escaleno
*/

let angulo1
let angulo2
let angulo3
let triangulo 
let tem2
let tem3

 angulo1 = 1110;
 angulo2 = 1110;
 angulo3 = 1110;

if ((angulo1 == angulo2) || (angulo1 == angulo3) || (angulo2 == angulo3))
{
        tem2 = true           
} 

if ((tem2) && ((angulo1 == angulo3) && (angulo2 == angulo3) && (angulo1 == angulo2)))
{
        tem3 = true
        tem2 = false    
}


//exibir em tela

if (tem2) {
    console.log("Triângulo Isóscele")    
}
else if (tem3){
    console.log("Triângulo Equilátero")
}

else {
    console.log("Triângulo Escaleno")
}