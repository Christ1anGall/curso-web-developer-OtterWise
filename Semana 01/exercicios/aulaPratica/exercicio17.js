/*
17-  Faça um programa que receberá a hora inicial e a hora final de um jogo. 
Aseguir calcule a duração do jogo, sabendo que o mesmo pode começar em um dia e terminar em outro, tendo uma duração máxima de 24 horas.
Ex: Início: 22 - Término: 06 - Tempo de Duração: 8 horas
*/



function tempoJogo(horaINI, horaFIM) {

    if (horaINI < horaFIM)
    {
        return  horaFIM - horaINI
    }
    
    else if (horaINI > horaFIM)
    {
        return (24 - horaINI ) + horaFIM
    }
}


console.log(tempoJogo(12,5) + " horas")


//****recorde****
//travei 3 dias para desenvolver
//****recorde****