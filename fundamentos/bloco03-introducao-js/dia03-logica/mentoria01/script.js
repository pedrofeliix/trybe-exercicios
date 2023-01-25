/* A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Escreva um algoritmo que imprima no terminal uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura na impressão:

"x, y, z, ...n" */

/*  1) imprimir  array de 1 a 50
    2) checar quais numeros sao impar do array
    3) coletar todos os numeros impares
    4) imprimir uma string com os numeros coletados

*/



let impar = [];

for (let index = 1; index <= 50; index += 1) {
  if (index % 2 == 1) {
    impar.push(index)
  }
}
console.log(impar);