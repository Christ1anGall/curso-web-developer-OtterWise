//metodos de iteração

const users = ["joao", "Gustavo", "Ermesson", "Wallace"];

//foreach

users.forEach((user, index, array) => {
    console.log(user);
    console.log(index);

    console.log(array);
});

// map - é necessario mudar os valores de um array

const newUsers = users.map((user) => {
    return {
        name: user
    }
});



console.log(newUsers)

console.log([1, 2, 3].map((el) => el * 10))

// filter encontrar uma lista de elementos

const numbers = [10, 1, 5, 30, 76]

const filteredArray = numbers.filter(number => {
    return number > 10;
})

console.log(filteredArray);



//find encontrar o elemento

const studentsAndTeachers = [{
    name: "joao",
    role: "professor",
    id: 4
},

{
    name: "Victor",
    role: "estudante",
    id: 65
},

{
    name: "Gustavo",
    role: "estudante",
    id: 8
}
]

const student = studentsAndTeachers.find(user => {
    return user.role === "estudante"
})


console.log(student)

//every 

const isEveryStudent = studentsAndTeachers.every(user => {
    return user.role === "estudante";
})

console.log(isEveryStudent);

// some 

const hasTeacher = studentsAndTeachers.some(user => {
    return user.role === "professor"
})

console.log(hasTeacher)


// sort 

console.log([10, 8, 6, 5, 4, 9, 2, 1].sort((a, b) => a - b))



const orderedArray = studentsAndTeachers.sort((a, b) => {
    return a.id - b.id;
})

const orderedArray2 = studentsAndTeachers.sort((a, b) => {
    if (a.id < b.id) {
        return -1
    }
    if (b.id > a.id) {
        return 1
    }
    else {
        return 0
    }

})



console.log(orderedArray2)



// reduce 

const numbers6 = [-8, 12, 76, 100, -230, -7, 120]

const sum = numbers6.reduce((accumulator, num, index) => {
    return accumulator + num



}, 0)

console.log(numbers6)