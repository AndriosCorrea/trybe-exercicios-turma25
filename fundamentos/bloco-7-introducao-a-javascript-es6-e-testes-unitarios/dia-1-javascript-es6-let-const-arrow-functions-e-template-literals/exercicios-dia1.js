/*🚀 1. Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
Modifique a estrutura da função para que ela seja uma arrow function;
Modifique as variáveis para que respeitem o escopo onde estão declaradas;
Modifique as concatenações para template literals.
*/
// const testingScope = escopo => {
//     if (escopo === true) {
//       let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//       ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
//       console.log(ifScope);
//     } else {
//       const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//       console.log(elseScope);
//     }
    
//   }

//   testingScope(true);

// 🚀2. Crie uma função que retorne um array em ordem crescente.

/* - Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;
 - Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
 - Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortOddsAndEvens = () => {
//   oddsAndEvens[0] = 2;
//   oddsAndEvens[1] = 3;
//   oddsAndEvens[2] = 4;
//   oddsAndEvens[3] = 7; 
//   oddsAndEvens[4] = 10;
//   oddsAndEvens[5] = 13;

//   return oddsAndEvens;
// };

// const sortedArray = sortOddsAndEvens();
// console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente!`); 


/* Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

 1. Crie uma função que receba um número e retorne seu fatorial.
 -  Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
Com base nessas informações:
 - Crie a função factorial que recebe um número como parâmetro, utilizando arrow functions (Lembre-se de armazenar a função utilizando o tipo de variável correta).
 - Dentro da função crie uma variável result.
 - Crie a lógica para retornar o fatorial de N!.
 - Imprima no terminal "Esse é o fatorial resultado da função" (Lembre-se de utilizar template literals nesse momento).

Dica: Armazene a chamada da função em uma varíavel para imprimir no terminal seu resultado.
Bônus: tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.*/

// const factorial = number => {
//     let result = 1;

//     for (let index = 2; index <= number; index += 1) {
//           result *= index;
        
//         }
//         return result;
// }

// const print = factorial(10); 

// console.log(`Esse é o fatorial ${print}`);

// 2. Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.

// const longestWord = (text) => {
//   const wordArray = text.split(' ');
//   let maxLength = 0;
//   let result = '';

//   for (const word of wordArray) {
//       if (word.length > maxLength) {
//           maxLength = word.length;
//           result = word;
//       }
//   }

//   return result;
// }

// console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Exercicio 3 esta em exercicio3-dia1.html

/* 🚀 4.  Crie duas funções JavaScript com as seguintes especificações:
Não se esqueça de usar template literals

 - Função 1: Escreva uma função que substitua a letra 'x' em uma frase.

 - O nome da função deverá ser substituaX;
 - A função deverá receber um nome por parâmetro;
 - Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
 - A função deverá retornar uma nova frase onde o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

 Exemplo:

 - Parâmetro: 'Bebeto'
 - Retorno: 'Tryber Bebeto aqui!'
Spoiler: O método split() pode ser utilizado de diferentes maneiras, como separar as palavras de um texto.

 - Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.

 - O nome da função deverá ser minhasSkills;
 - A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
 - Declare dentro da função uma variável com o nome skills, do tipo const;
 - A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
 - Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

 Exemplo de retorno:

Tryber Bebeto aqui!
Minhas três principais habilidades são:
JavaScript
HTML
CSS
*/
