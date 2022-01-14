const market = [
{ nome: 'maçã', quantidade: 2, valor: 0.5},
{ nome: 'alface', quantidade: 1, valor: 1.73},
{ nome: 'Água 5L', quantidade: 2, valor: 5.99},
{ nome: 'Pão Francês', quantidade: 8, valor: 0.63}
]

let totalPay = 0

for (let index = 0; index < market.length; index++) {
    itenTotal = market[index].quantidade * market[index].valor
    totalPay += itenTotal
}

console.log(`R$ ${totalPay}`);

