const minhaString = "joao";
const nome = "j" + "o" + "a" + "o";

// string pode ser dividido em partes menores = interable. então ela é igual uma array tambem

const array = ["j", "o", "a", "o"]

// Métodos de string 

//Metodos para extratir strings 
//slice 

const str = "maçã, banana , laranja";
const part = str.slice(6, 12);

console.log(part)

//substring 


const part2 = str.substring(6, 12);
console.log(part2)

//substr

const part3 = str.substr(5, 15);// não utilizar

console.log(part3);

//Métodos para modificar conteúdos de uma string

// Replace e  Replace All

let text = "Olá alunos Otterwise"
let netText = text.replace("Otterwise", "do curso web developer");

console.log(netText);
console.log(text.replaceAll("Otterwise", "teste"));

//Estudar Regex

let newTextRegex = text.replace(/OtterwIse/gi, "do curso web developer"); // o i eu tiro o caseSensitive e o quando adiciono o g ele troca todas as ocorrencias do padrão
console.log(newTextRegex)

//toUpperCase

const myName = "joao"

console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

//trim

const frase = "            Olá World";
console.log(frase.trim());

// padStart e padEnd

const numero = "5";
console.log(numero.padStart(4, "0"));

console.log(numero.padEnd(4, "0"));

// split 

const arrayFruits = str.split(",");
console.log(arrayFruits);





