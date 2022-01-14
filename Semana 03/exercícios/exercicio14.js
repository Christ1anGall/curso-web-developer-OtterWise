let objectStruct =
    [{
        cod: 1,
        name: "helio",
        stock: 6,
        price: 20,
        category: "ficção",
    },
    {
        cod: 2,
        name: "kelly",
        stock: 7,
        price: 25,
        category: "guerra",
    }
    ]


function filterBookByName(entryArray, string) {
    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].name.indexOf(string) !== -1) {

            console.log(entryArray[index])
        }

    }

}

function filterBookByCod(entryArray, string) {
    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].cod.indexOf(string) !== -1) {

            console.log(entryArray[index])

        }

    }


}

function filterBookByCategoty(entryArray, string) {
    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].category.indexOf(string) !== -1) {

            console.log(entryArray[index])

        }

    }


}

function filterBookByValueRange(entryArray, valueLowPrice, valueHighPrice) {
    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].valor > valueLowPrice && entryArray[index].valor < valueHighPrice) {

            console.log(entryArray[index])
        }


    }


}

function growingName(entryArray) {

    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].name[0] === "a") {
            entryArray[index].name[0] = 1

        }
        else if (entryArray[index].name[0] == "b" || "B") {
            entryArray[index].name[0] = 2

        }
        else if (entryArray[index].name[0] == "c" || "C") {
            entryArray[index].name[0] = 3
        }
        else if (entryArray[index].name[0] == "d" || "D") {
            entryArray[index].name[0] = 4
        }
        else if (entryArray[index].name[0] == "e" || "E") {
            entryArray[index].name[0] = 5
        }
        else if (entryArray[index].name[0] == "f" || "F") {
            entryArray[index].name[0] = 6
        }
        else if (entryArray[index].name[0] == "g" || "G") {
            entryArray[index].name[0] = 7
        }
        else if (entryArray[index].name[0] == "h" || "H") {
            entryArray[index].name[0] = 8
        }
        else if (entryArray[index].name[0] == "i" || "I") {
            entryArray[index].name[0] = 9
        }
        else if (entryArray[index].name[0] == "j" || "J") {
            entryArray[index].name[0] = 10
        }
        else if (entryArray[index].name[0] == "k" || "K") {
            entryArray[index].name[0] = 11
        }
        else if (entryArray[index].name[0] == "l" || "L") {
            entryArray[index].name[0] = 12
        }
        else if (entryArray[index].name[0] == "m" || "M") {
            entryArray[index].name[0] = 13
        }
        else if (entryArray[index].name[0] == "n" || "N") {
            entryArray[index].name[0] = 14
        }
        else if (entryArray[index].name[0] == "o" || "O") {
            entryArray[index].name[0] = 15
        }
        else if (entryArray[index].name[0] == "p" || "P") {
            entryArray[index].name[0] = 16
        }
        else if (entryArray[index].name[0] == "q" || "Q") {
            entryArray[index].name[0] = 17
        }
        else if (entryArray[index].name[0] == "r" || "R") {
            entryArray[index].name[0] = 18
        }
        else if (entryArray[index].name[0] == "s" || "S") {
            entryArray[index].name[0] = 19
        }
        else if (entryArray[index].name[0] == "t" || "T") {
            entryArray[index].name[0] = 20
        }
        else if (entryArray[index].name[0] == "u" || "U") {
            entryArray[index].name[0] = 21
        }
        else if (entryArray[index].name[0] == "v" || "V") {
            entryArray[index].name[0] = 22
        }
        else if (entryArray[index].name[0] == "w" || "W") {
            entryArray[index].name[0] = 23
        }
        else if (entryArray[index].name[0] == "x" || "X") {
            entryArray[index].name[0] = 24
        }
        else if (entryArray[index].name[0] == "y" || "Y") {
            entryArray[index].name[0] = 25
        }
        else if (entryArray[index].name[0] == "z" || "Z") {
            entryArray[index].name[0] = 26
        }


        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {

            if (entryArray[index].name[0] > entryArray[index2].name[0]) {


                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }



        console.log(entryArray[index].name)

    }


}

function growingCod(entryArray) {
    for (let index = 0; index < entryArray.length; index++) {
        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {
            if (entryArray[index2].cod > entryArray[index].cod) {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux


            }


        }
        console.log(entryArray[index].cod)

    }


}

function growingStock(entryArray) {
    for (let index = 0; index < entryArray.length; index++) {
        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {
            if (entryArray[index2].stock > entryArray[index].stock) {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }
        console.log(entryArray[index].stock)

    }


}

function growingPrice(entryArray) {
    for (let index = 0; index < entryArray.length; index++) {
        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {
            if (entryArray[index2].price > entryArray[index].price) {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }
        console.log(entryArray[index].price)

    }


}

function growingCategory(entryArray) {

    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].category[0] === "a") {
            entryArray[index].category[0] = 1

        }
        else if (entryArray[index].category[0] == "b" || "B") {
            entryArray[index].category[0] = 2

        }
        else if (entryArray[index].category[0] == "c" || "C") {
            entryArray[index].category[0] = 3
        }
        else if (entryArray[index].category[0] == "d" || "D") {
            entryArray[index].category[0] = 4
        }
        else if (entryArray[index].category[0] == "e" || "E") {
            entryArray[index].category[0] = 5
        }
        else if (entryArray[index].category[0] == "f" || "F") {
            entryArray[index].category[0] = 6
        }
        else if (entryArray[index].category[0] == "g" || "G") {
            entryArray[index].category[0] = 7
        }
        else if (entryArray[index].category[0] == "h" || "H") {
            entryArray[index].category[0] = 8
        }
        else if (entryArray[index].category[0] == "i" || "I") {
            entryArray[index].category[0] = 9
        }
        else if (entryArray[index].category[0] == "j" || "J") {
            entryArray[index].category[0] = 10
        }
        else if (entryArray[index].category[0] == "k" || "K") {
            entryArray[index].category[0] = 11
        }
        else if (entryArray[index].category[0] == "l" || "L") {
            entryArray[index].category[0] = 12
        }
        else if (entryArray[index].category[0] == "m" || "M") {
            entryArray[index].category[0] = 13
        }
        else if (entryArray[index].category[0] == "n" || "N") {
            entryArray[index].category[0] = 14
        }
        else if (entryArray[index].category[0] == "o" || "O") {
            entryArray[index].category[0] = 15
        }
        else if (entryArray[index].category[0] == "p" || "P") {
            entryArray[index].category[0] = 16
        }
        else if (entryArray[index].category[0] == "q" || "Q") {
            entryArray[index].category[0] = 17
        }
        else if (entryArray[index].category[0] == "r" || "R") {
            entryArray[index].category[0] = 18
        }
        else if (entryArray[index].category[0] == "s" || "S") {
            entryArray[index].category[0] = 19
        }
        else if (entryArray[index].category[0] == "t" || "T") {
            entryArray[index].category[0] = 20
        }
        else if (entryArray[index].category[0] == "u" || "U") {
            entryArray[index].category[0] = 21
        }
        else if (entryArray[index].category[0] == "v" || "V") {
            entryArray[index].category[0] = 22
        }
        else if (entryArray[index].category[0] == "w" || "W") {
            entryArray[index].category[0] = 23
        }
        else if (entryArray[index].category[0] == "x" || "X") {
            entryArray[index].category[0] = 24
        }
        else if (entryArray[index].category[0] == "y" || "Y") {
            entryArray[index].category[0] = 25
        }
        else if (entryArray[index].category[0] == "z" || "Z") {
            entryArray[index].category[0] = 26
        }


        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {

            if (entryArray[index].category[0] > entryArray[index2].category[0]) {


                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }



        console.log(entryArray[index].category)

    }


}

function goingDownName(entryArray) {

    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].name[0] === "a") {
            entryArray[index].name[0] = 1

        }
        else if (entryArray[index].name[0] == "b" || "B") {
            entryArray[index].name[0] = 2

        }
        else if (entryArray[index].name[0] == "c" || "C") {
            entryArray[index].name[0] = 3
        }
        else if (entryArray[index].name[0] == "d" || "D") {
            entryArray[index].name[0] = 4
        }
        else if (entryArray[index].name[0] == "e" || "E") {
            entryArray[index].name[0] = 5
        }
        else if (entryArray[index].name[0] == "f" || "F") {
            entryArray[index].name[0] = 6
        }
        else if (entryArray[index].name[0] == "g" || "G") {
            entryArray[index].name[0] = 7
        }
        else if (entryArray[index].name[0] == "h" || "H") {
            entryArray[index].name[0] = 8
        }
        else if (entryArray[index].name[0] == "i" || "I") {
            entryArray[index].name[0] = 9
        }
        else if (entryArray[index].name[0] == "j" || "J") {
            entryArray[index].name[0] = 10
        }
        else if (entryArray[index].name[0] == "k" || "K") {
            entryArray[index].name[0] = 11
        }
        else if (entryArray[index].name[0] == "l" || "L") {
            entryArray[index].name[0] = 12
        }
        else if (entryArray[index].name[0] == "m" || "M") {
            entryArray[index].name[0] = 13
        }
        else if (entryArray[index].name[0] == "n" || "N") {
            entryArray[index].name[0] = 14
        }
        else if (entryArray[index].name[0] == "o" || "O") {
            entryArray[index].name[0] = 15
        }
        else if (entryArray[index].name[0] == "p" || "P") {
            entryArray[index].name[0] = 16
        }
        else if (entryArray[index].name[0] == "q" || "Q") {
            entryArray[index].name[0] = 17
        }
        else if (entryArray[index].name[0] == "r" || "R") {
            entryArray[index].name[0] = 18
        }
        else if (entryArray[index].name[0] == "s" || "S") {
            entryArray[index].name[0] = 19
        }
        else if (entryArray[index].name[0] == "t" || "T") {
            entryArray[index].name[0] = 20
        }
        else if (entryArray[index].name[0] == "u" || "U") {
            entryArray[index].name[0] = 21
        }
        else if (entryArray[index].name[0] == "v" || "V") {
            entryArray[index].name[0] = 22
        }
        else if (entryArray[index].name[0] == "w" || "W") {
            entryArray[index].name[0] = 23
        }
        else if (entryArray[index].name[0] == "x" || "X") {
            entryArray[index].name[0] = 24
        }
        else if (entryArray[index].name[0] == "y" || "Y") {
            entryArray[index].name[0] = 25
        }
        else if (entryArray[index].name[0] == "z" || "Z") {
            entryArray[index].name[0] = 26
        }


        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {

            if (entryArray[index].name[0] < entryArray[index2].name[0]) {


                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }



        console.log(entryArray[index])

    }


}

function goingDownCod(entryArray) {
    for (let index = 0; index < entryArray.length; index++) {
        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {
            if (entryArray[index2].cod < entryArray[index].cod) {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux


            }


        }
        console.log(entryArray[index].cod)

    }


}

function goinDownStock(entryArray) {
    for (let index = 0; index < entryArray.length; index++) {
        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {
            if (entryArray[index2].stock < entryArray[index].stock) {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }
        console.log(entryArray[index].stock)

    }


}

function goinDownPrice(entryArray) {
    for (let index = 0; index < entryArray.length; index++) {
        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {
            if (entryArray[index2].price < entryArray[index].price) {

                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }
        console.log(entryArray[index].price)

    }


}

function goingDownCategory(entryArray) {

    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].category[0] === "a" || "A") {
            entryArray[index].category[0] = 1

        }
        else if (entryArray[index].category[0] == "b" || "B") {
            entryArray[index].category[0] = 2

        }
        else if (entryArray[index].category[0] == "c" || "C") {
            entryArray[index].category[0] = 3
        }
        else if (entryArray[index].category[0] == "d" || "D") {
            entryArray[index].category[0] = 4
        }
        else if (entryArray[index].category[0] == "e" || "E") {
            entryArray[index].category[0] = 5
        }
        else if (entryArray[index].category[0] == "f" || "F") {
            entryArray[index].category[0] = 6
        }
        else if (entryArray[index].category[0] == "g" || "G") {
            entryArray[index].category[0] = 7
        }
        else if (entryArray[index].category[0] == "h" || "H") {
            entryArray[index].category[0] = 8
        }
        else if (entryArray[index].category[0] == "i" || "I") {
            entryArray[index].category[0] = 9
        }
        else if (entryArray[index].category[0] == "j" || "J") {
            entryArray[index].category[0] = 10
        }
        else if (entryArray[index].category[0] == "k" || "K") {
            entryArray[index].category[0] = 11
        }
        else if (entryArray[index].category[0] == "l" || "L") {
            entryArray[index].category[0] = 12
        }
        else if (entryArray[index].category[0] == "m" || "M") {
            entryArray[index].category[0] = 13
        }
        else if (entryArray[index].category[0] == "n" || "N") {
            entryArray[index].category[0] = 14
        }
        else if (entryArray[index].category[0] == "o" || "O") {
            entryArray[index].category[0] = 15
        }
        else if (entryArray[index].category[0] == "p" || "P") {
            entryArray[index].category[0] = 16
        }
        else if (entryArray[index].category[0] == "q" || "Q") {
            entryArray[index].category[0] = 17
        }
        else if (entryArray[index].category[0] == "r" || "R") {
            entryArray[index].category[0] = 18
        }
        else if (entryArray[index].category[0] == "s" || "S") {
            entryArray[index].category[0] = 19
        }
        else if (entryArray[index].category[0] == "t" || "T") {
            entryArray[index].category[0] = 20
        }
        else if (entryArray[index].category[0] == "u" || "U") {
            entryArray[index].category[0] = 21
        }
        else if (entryArray[index].category[0] == "v" || "V") {
            entryArray[index].category[0] = 22
        }
        else if (entryArray[index].category[0] == "w" || "W") {
            entryArray[index].category[0] = 23
        }
        else if (entryArray[index].category[0] == "x" || "X") {
            entryArray[index].category[0] = 24
        }
        else if (entryArray[index].category[0] == "y" || "Y") {
            entryArray[index].category[0] = 25
        }
        else if (entryArray[index].category[0] == "z" || "Z") {
            entryArray[index].category[0] = 26
        }


        for (let index2 = (index + 1); index2 < entryArray.length; index2++) {

            if (entryArray[index].category[0] < entryArray[index2].category[0]) {


                let aux = entryArray[index2]
                entryArray[index2] = entryArray[index]
                entryArray[index] = aux

            }


        }



        console.log(entryArray[index].category)

    }


}


// modulo de compra

const cartObject = [] // carrinho de compra
let indexCartObject = 0 // index do carrinho de compra

//função confere se o produto existe e cria um objeto do carrinho de compra e adiciona no cartObject que é o carrinho de compra
function creatAnItenForShoppingCart(entryArray, howManyItens, productCode) {

    for (let index = 0; index < entryArray.length; index++) {
        if (entryArray[index].cod == productCode && entryArray[index].stock > howManyItens) {
            cartObject[indexCartObject] = {
                name: entryArray[index].name,
                price: entryArray[index].price * howManyItens,
                cod: productCode,
                itens: howManyItens
            }

            indexCartObject++

        }



    }




}

//exemplo da chamada da função criando primeiro objeto
creatAnItenForShoppingCart(objectStruct, 3, 1)
//exemplo da chamada da função criando segundo objeto
creatAnItenForShoppingCart(objectStruct, 3, 2)



console.log(cartObject);




// valor total do carrinho de compra
function totalValueOfCartObject(cartObject) {

    let totalValue = 0

    for (let index = 0; index < cartObject.length; index++) {

        totalValue = cartObject[index].price + totalValue

    }

    return `${totalValue}`
}






function finalizingThePurchase(valueTotal, payment, installment) {

    if (payment == "boleto") {

        let boleto = valueTotal - (valueTotal / 10)

        return `Sua compra tem um total de ${valueTotal} mas no boleto fica em ${boleto}`

    }

    if (payment == "débito") {


        let debito = valueTotal - (valueTotal / 15)

        return `Sua compra tem um total de ${valueTotal} mas no débito fica em ${debito}`

    }

    if (payment == "crédito" && installment <= 12) {

        let parcelas = valueTotal / installment
        let parcelasJuros = parcelas + (parcelas / 3)

        let totalparcelas = parcelasJuros * installment

        return `Sua compra tem um total de ${valueTotal} foi parcelada em ${installment} vezes de ${parcelasJuros} e assim o valor total da compra ficou em ${totalparcelas} R$`

    }

    if (payment == "crédito" && installment > 12) {
        return "Parcelamos no máximo em 12 vezes"
    }

    if (payment != "boleto" || payment != "débito" || payment != "crédito" ){
        return "Verifique o pagamento"
    }




}

function reportFinish(shopping, payment,) {

    return shopping && payment
}

console.log(reportFinish(cartObject, finalizingThePurchase(totalValueOfCartObject(cartObject), "crédito", 10)))
