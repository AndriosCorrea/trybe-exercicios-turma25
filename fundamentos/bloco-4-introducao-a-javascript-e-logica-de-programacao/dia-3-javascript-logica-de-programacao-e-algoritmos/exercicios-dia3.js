// 1- O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 1;

// for (let index = 10; index > 0; index -= 1) {
//   fatorial *= index;
// }

// console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let newWord = "";


// for (let index = 0; index < word.length; index += 1) {
//   newWord += word[word.length - 1 - index];
// }

// console.log(newWord);

// 3- Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
// let maiorPalavra = array[0];
// let menorPalavra = array[0];

// for (let index = 0; index < array.length; index += 1){
//     if (array[index].length > maiorPalavra.length){
//         maiorPalavra = array[index]
//     }
    
// }

// for (let index = 0; index < array.length; index += 1){
//     if (array[index].length < menorPalavra.length){
//         menorPalavra = array[index]
//     }
// }

// console.log(menorPalavra);
// console.log(maiorPalavra);


// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

// 1.Numeros primos = divididos por 1 ou por eles mesmos.
// 2. começa no numero 2 e vai até o 50

// let maiorNumeroPrimo = 0;

// for (let index = 2; index <= 50; index +=1 ){
//     let numPrimo = true;
//     for (let index2 = 2; index2 < index; index2 +=1){
//         if (index % index2 ===0){
//             numPrimo = false;
//         }
//     }
//     if (numPrimo){
//         maiorNumeroPrimo = index;
//     } 
// }

// console.log(maiorNumeroPrimo);


