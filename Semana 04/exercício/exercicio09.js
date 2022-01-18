const compraNoMercadinho = [{ nome: 'maçã', quantidade: 2, valor: 0.5},{ nome: 'alface', quantidade: 1, valor: 1.73},{ nome: 'Água 5L', quantidade: 2, valor: 5.99},{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}]


const total = compraNoMercadinho.reduce((acc,value)=>{
    return acc + value.valor
},0)

console.log(Math.floor(total))