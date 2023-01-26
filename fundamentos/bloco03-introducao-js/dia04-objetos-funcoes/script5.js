/* Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados. */

const primeiroNumero = 10;
const segundoNumero = 20;

function maiorNumero(primeiroNumero, segundoNumero) {
    if (primeiroNumero > segundoNumero) {
        return 'O maior número é ' + primeiroNumero + '!';
    } 
    else if (primeiroNumero < segundoNumero) {
        return 'O maior número é ' + segundoNumero + '!';
    } 
    else {
        return 'Não existe número maior, pois ' + primeiroNumero + ' é igual a ' + segundoNumero + '!';
    }
}

console.log(maiorNumero(primeiroNumero, segundoNumero));