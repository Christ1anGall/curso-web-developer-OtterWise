let numbers = [5, 3, 2, 1, 0];
let soma = 0;

for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
  soma += numbers[index];
}

// soma -> 0 -> 5 -> 8
// numbers -> [5, 3, 2, 1, 0]
// index -> 0 -> 1
// numbers.length -> 5
