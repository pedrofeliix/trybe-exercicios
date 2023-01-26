/* 
Um número primo é um número inteiro maior do que 1 que possui somente dois divisores,
ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que 
imprima no console o maior número primo entre 2 e 50.
*/

/* 
1) denominar variavel maiorNumero
2) criação de for para checar e validar o maior entre 2 e 50
3) criação de if para dizer "se o novo numero é maior que o antigo, salve o novo"
*/

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);