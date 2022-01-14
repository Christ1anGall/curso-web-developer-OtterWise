

function moneyReturn(value)
{
  const notas =
  {

    nota100: value / 100,
    nota50: (value % 100)/50,
    nota20: (value % 50)/20,    
    nota10: (((value % 50)/20)%1)*2,
    nota5:  (value % 10)/5,
    nota2:  (value % 5)/2,
    nota1:  (((value % 5)/2)%1)*2,

  }
 


    return `para ${value} serão

    ${Math.floor(notas.nota100)} nota(s) de R$100,00
    ${Math.floor(notas.nota50)}  nota(s) de R$50,00
    ${Math.floor(notas.nota20)}  nota(s) de R$20,00
    ${Math.floor(notas.nota10)}  nota(s) de R$10,00
    ${Math.floor(notas.nota5)}  nota(s) de R$05,00
    ${Math.floor(notas.nota2)}  nota(s) de R$02,00
    ${Math.floor(notas.nota1)}  moeda(s) de R$01,00
    `

}


console.log(moneyReturn(1000))
