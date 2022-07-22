// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// for (let index = 0; index < numbers.length; index +=1){
//     console.log(numbers[index])
// }


// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;
// for (index=0; index < numbers.length; index+=1){
//     sum += numbers[index]
//     console.log(sum)
// }
// console.log(sum)

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (index=0; index < numbers.length; index+=1){
//     sum += numbers[index]
// }
// let mediaAritmetica = sum / numbers.length;
// console.log(mediaAritmetica)

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (index=0; index < numbers.length; index+=1){
//     sum += numbers[index]
// }
// let mediaAritmetica = sum / numbers.length;

// if (mediaAritmetica > 20){
//     console.log("valor maior que vinte")
// }else {
//     console.log("vamor menor que vinte")
// }

//  5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorNum = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] > maiorNum) {
//     maiorNum = numbers[index];
//   }
// }

// console.log(maiorNum);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 !== 0) {
//     result += 1;
//   }
// }

// if (result === 0) {
//   console.log('nenhum valor ímpar encontrado');
// } else {
//   console.log(result);
// }

// 7.Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let menorNum = numbers[0];

// for (let index = 1; index < numbers.length; index += 1) {
//   if (numbers[index] < menorNum) {
//     menorNum= numbers[index];
//   }
// }

// console.log(menorNum);

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// let numbers = [];

// for (let index = 1; index <= 25; index += 1) {
//   numbers.push(index);
// }

// console.log(numbers);

// 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index] / 2);
//   };