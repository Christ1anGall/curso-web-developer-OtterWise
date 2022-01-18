const metaVerso = [{
    nome: "João",
    idade: 30,
    salario: 15000,
    senioridade: "senior"
}, {
    nome: "Pedro",
    idade: 22,
    salario: 10000,
    senioridade: "pleno"
}, {
    nome: "Carla",
    idade: 27,
    salario: 1500,
    senioridade: "estagio"
}, {
    nome: "Lucas",
    idade: 35,
    salario: 15000,
    senioridade: "senior"
}, {
    nome: "Roberta",
    idade: 45,
    salario: 5000,
    senioridade: "junior"
}, {
    nome: "Patrícia",
    idade: 19,
    salario: 10000,
    senioridade: "pleno"
}, {
    nome: "Joana",
    idade: 23,
    salario: 5000,
    senioridade: "junior"
},]


const sortByAgeDownForUp = arrayEntry => {
    arrayEntry.sort((a, b) => {
        if (a.idade < b.idade) {
            return -1
        }
        if (b.idade > a.idade) {
            return 1
        }

    });
    return arrayEntry
}





const sortByAgeUpForDown = arrayEntry => {
    arrayEntry.sort((a, b) => {
        if (a.idade > b.idade) {
            return -1
        }
        if (b.idade < a.idade) {
            return 1
        }

    })
    return arrayEntry
}




const sortByPaymentUpForDown = arrayEntry => {
    arrayEntry.sort((a, b) => {
        if (a.salario > b.salario) {
            return -1
        }
        if (b.salario < a.salario) {
            return 1
        }

    })
    return arrayEntry
}



const sortByPaymentDownForUp = arrayEntry => {
    arrayEntry.sort((a, b) => {
        if (a.salario < b.salario) {
            return -1
        }
        if (b.salario > a.salario) {
            return 1
        }

    })
    return arrayEntry
}







const sortByJobsPositionsDownForUp = arrayEntry => {

    arrayEntry.map((element) => {
        if (element.senioridade === "estagio") {
            element.senioridade = 1
        }
        if (element.senioridade === "junior") {
            element.senioridade = 2
        }
        if (element.senioridade === "pleno") {
            element.senioridade = 3
        }
        if (element.senioridade === "senior") {
            element.senioridade = 4
        }
    })


    arrayEntry.sort((a, b) => {
        if (a.senioridade < b.senioridade) {
            return -1
        }
        if (b.senioridade > a.senioridade) {
            return 1
        }

    })


    arrayEntry.map((element) => {
        if (element.senioridade === 1) {
            element.senioridade = "estagio"
        }
        if (element.senioridade === 2) {
            element.senioridade = "junior"
        }
        if (element.senioridade === 3) {
            element.senioridade = "pleno"
        }
        if (element.senioridade === 4) {
            element.senioridade = "senior"
        }
    })

    return arrayEntry



}

const sortByJobsPositionsUpForDown = arrayEntry => {

    arrayEntry.map((element) => {
        if (element.senioridade === "estagio") {
            element.senioridade = 1
        }
        if (element.senioridade === "junior") {
            element.senioridade = 2
        }
        if (element.senioridade === "pleno") {
            element.senioridade = 3
        }
        if (element.senioridade === "senior") {
            element.senioridade = 4
        }
    })


    arrayEntry.sort((a, b) => {
        if (a.senioridade > b.senioridade) {
            return -1
        }
        if (b.senioridade < a.senioridade) {
            return 1
        }

    })


    arrayEntry.map((element) => {
        if (element.senioridade === 1) {
            element.senioridade = "estagio"
        }
        if (element.senioridade === 2) {
            element.senioridade = "junior"
        }
        if (element.senioridade === 3) {
            element.senioridade = "pleno"
        }
        if (element.senioridade === 4) {
            element.senioridade = "senior"
        }
    })

    return arrayEntry



}


console.log(sortByJobsPositionsUpForDown(metaVerso))

