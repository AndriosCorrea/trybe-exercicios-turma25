// Para fixar - EXERCICICO DE OBJETOS

// 1 - Crie um objeto player contendo as variáveis listadas abaixo.
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

// let player = {
//     name: "Marta",
//     lastName:"Silva",
//     age: 34,
//     medals: {golden:2, silver:3},
// }

// 2 - Acesse as chaves name, lastName e age e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".



// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');

// 3 - Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
// [2006, 2007, 2008, 2009, 2010, 2018]

// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log(player)

// 4 - Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

// console.log ("A jogadora " +  player.name + " " + player.lastName +" " + "foi eleita a melhor do mundo por 6 vezes em: " + player.bestInTheWorld );

// 5 - Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

// console.log("A jogadora possui " +  player.medals.golden + " " + "medalhas de ouro e" + " " + player.medals.silver + " " + "medalhas de prata");


// PARA FIXAR -EXERCICIO DE FOR IN/FOR OFF 


// No exemplo acima, utilizamos o for/of para percorrer o nosso iterável e nos retornar o valor dos índices.
// Agora que você já sabe a diferença entre eles e como usá-los, vamos praticar?

// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge',
//   };

  
//   for (let name in names) {
//     console.log( "Olá, " + names[name]);
//   }

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020
//   };
//   for (let cars in car)
//   console.log (cars + ":" + car[cars])

// PARA FIXAR - EXERCICIO DE FUNÇÕES

// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// function soma(a, b) {
//     return a + b;
//   }
  
//   function sub(a, b) {
//     return a - b;
//   }
  
//   function mult(a, b) {
//     return a * b;
//   }
  
//   function div(a, b) {
//     return a / b;
//   }
  
//   function mod(a, b) {
//     return a % b;
//   }


// 2 - Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

// function maiorNum(primeiroNum, segundoNum) {
//     if (primeiroNum > segundoNum) {
//       return primeiroNum + ' é maior que ' + segundoNum;
//     } else {
//       return segundoNum + ' é maior que ' + primeiroNum;
//     }
//   }

// 3 - Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

// function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
//     if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//       return 'O maior número é: ' + primeiroNum;
//     } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
//       return 'O maior número é: ' + segundoNum;
//     } else {
//       return 'O maior número é: ' + terceiroNum;
//     }
//   }

// 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".

// function positiveNegative(number) {
//     if (number > 0) { // Testa se o número é positivo (maior que 0)
//       return 'positive';
//     } else if (number < 0) { // Testa se o número é negativo (menor que 0)
//       return 'negative';
//     } else { // Se nenhum teste passar, o número é igual a 0
//       return 'zero';
//     }
//   }

// 5 - Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// function triangleAnglesValidate(angleA, angleB, angleC) {
//     let sumOfAngles = angleA + angleB + angleC;
  
//     let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
//     if (allAnglesArePositives) {
//       if (sumOfAngles === 180) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return 'Erro: ângulo inválido';
//     }
//   }


// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. 


// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. 

// 3 - Faça um for/in que mostre todas as chaves do objeto. 

// 4 - Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. 

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

// ______________________________________________________________

// let leitor = {
//     nome: 'Julia',
//     sobrenome: 'Pessoa',
//     idade: 21,
//     livrosFavoritos: [
//       {
//         titulo: 'O Pior Dia de Todos',
//         autor: 'Daniela Kopsch',
//         editora: 'Tordesilhas',
//       },
//     ],
//   };

// 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".

//  7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a esta chave um objeto contendo as seguintes informações:

// 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".

// ____________________________FUNÇÕES______________________________________


// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.


// function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// function indiceDoMaior(numeros) {
//     let indiceMaior = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMaior] < numeros[indice]) {
//         indiceMaior = indice;
//       }
//     }
  
//     return indiceMaior;
//   }
  
//   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

// function indiceDoMenor(numeros) {
//     let indiceMenor = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMenor] > numeros[indice]) {
//         indiceMenor = indice;
//       }
//     }
  
//     return indiceMenor;
//   }
  
//   console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// function maiorPalavra(palavras) {
//     let maiorPalavra = palavras[0];
//     for (let indice in palavras) {
//       if (maiorPalavra.length < palavras[indice].length) {
//         maiorPalavra = palavras[indice];
//       }
//     }
  
//     return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

//  5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

// function maisRepetido(numeros) {
//     let num = {};
  
//     for (let index = 0; index < numeros.length; index += 1) {
//       let valor = numeros[index];
//       if (num[valor] === undefined) {
//         num[valor] = 1;
//       } else {
//         num[valor] = num[valor] + 1;
//       }
//     }
  
//     let contRepetido = 0;
//     let contNumero = 0;
  
//     for (let prop in num) {
//       if (contRepetido < num[prop]) {
//         contRepetido = num[prop];
//         contNumero = prop;
//       }
//     }
  
//     return contNumero;
//   }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); // 2

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function somaTodosNumeros(numero) {
//     let total = 0;
  
//     for (let index = 1; index <= numero; index += 1) {
//       total = total + index;
//     }
//     return total;
//   }
  
//   console.log(somaTodosNumeros(5)); //15

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

// function verificaFimPalavra(palavra, fimPalavra) {
//     let inversoPalavra = palavra.split('').reverse().join('');
//     let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//     let result;
  
//     for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//       if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//         result = false;
//         break; // O "break" serve para encerrar o loop.
//       } else {
//         result = true;
//       }
//     }
    
//     return result;
//   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false

