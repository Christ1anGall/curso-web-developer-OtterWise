const array = [1, 3, -12, 33, -1, 9, 110, -1168, 252, -15253, 2127]



const findNumber = array.some(value => {
    return value === 9
})

findNumber ? console.log("o valor foi encontrado no array"):console.log("valor não encontrado no array")

