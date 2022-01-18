// Métodos de Array

// adicionar novos valores em array

// Concat

const students = ["Christian", "Alessandro", "Ermesson"];
const newStudents = students.concat("Wallace");
const newStudents2 = students.concat(["Wallace", "Azul"]);

console.log(students)
console.log(newStudents)
console.log(newStudents2)

// Push

const fruits = ["banana", "laranja"];
fruits.push("maça");
console.log(fruits)

//join 

const joinedFruits = fruits.join(", ");
console.log(joinedFruits);


// pop - remove o ultimo elemento do array - modifica o array principal também

const users = ["nome 1", "nome2", "nome4"];
const user = users.pop();
console.log(users)
console.log(user)

//shift - remove o primeiro elemento do meu array e modifica o array principal

const frutis2 = ["banana", "laranja"];
const fruit = frutis2.shift();

console.log(fruit)
console.log(frutis2)

//unshift - insere no primeiro elemento do meu array e modifica o array principal

fruits.unshift("limão");
console.log(frutis2)


//slice

const tools = ["tool1", "tool2", "tool3", "tool4", "tool7", "tool10", "tool4", "tool7", "tool4", "tool7"]
const toolsPart = tools.slice(0, 1);

console.log(toolsPart);

//splice - para adiconar ou para remover

//remover
tools.splice(1, 2)
console.log(tools);

//adicionar

tools.splice(6, 0, "tools5")

console.log(tools);


//reverse

const tiProdutcs = ["HD1", "DH2", "DH5", "DH6", "DH3"]
tiProdutcs.reverse()

console.log(tiProdutcs);