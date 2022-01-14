// Funções regulares

function soma(numberOne, numberTwo){ 
    return numberOne + numberTwo;
}
let resultado = soma(2,2);
    console.log(resultado)

function sayHello(){
    console.log("Hello World");
}

sayHello();

//funcao

function selectOperation(operacao){
        switch (operacao){
            case "+":
                return "soma"
            
            case "-":
                return "subtração"
                

                default:;
                return "case3"
}}

const operation = selectOperation("-");
console.log(operation);


