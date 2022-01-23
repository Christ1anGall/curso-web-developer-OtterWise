const bookStore = [{
    cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,
    estoque: 10
},
{
    cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,
    estoque: 20
},
{
    cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,
    estoque: 30
},
{
    cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445,
    estoque: 40
},
{
    cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581,
    estoque: 50
},
{
    cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730,
    estoque: 60
},
{
    cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703,
    estoque: 40
},
{
    cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707,
    estoque: 05
},
{
    cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442,
    estoque: 04
},
{
    cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824,
    estoque: 03
},
{
    cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797,
    estoque: 09
},
];

function autorOfBestSeller(array) {
    return array.sort((a, b) => a.quantidadeVendido - b.quantidadeVendido).pop().autor
}

function filterByValueBelow(value, Array) {
    let filteredArraybelow = Array.filter(number => {
        return number.valor < value;
    })
    return filteredArraybelow
}

function filterByValueAbove(value, Array) {
    let filteredArraybelow = Array.filter(number => {
        return number.valor > value;
    })
    return filteredArraybelow
}

function searchByName(name, array) {
    return nameFind = array.find(element => element.nome === name)
}

function searchByAutor(autor, array) {
    return nameFind = array.find(element => element.autor === autor)
}

function searchByCod(cod, array) {
    return nameFind = array.find(element => element.cod === cod)
}

const stockList = bookStore.map((value) => {
    return `${value.nome} possui ${value.estoque} em estoque.`
})

function topXbestSeller(value, array) {
    return array.sort((a, b) => b.quantidadeVendido - a.quantidadeVendido).slice(0, value)
}

function percentMultiply(value, array) {
    return array.map((value1) => {
        return newArray = {

            cod: value1.cod,
            nome: value1.nome,
            autor: value1.autor,
            valor: Number((value1.valor + (value1.valor * (value / 100))).toFixed(2)),
            quantidadeVendido: value1.quantidadeVendido
        }

    })
}


console.log(percentMultiply(50, bookStore));