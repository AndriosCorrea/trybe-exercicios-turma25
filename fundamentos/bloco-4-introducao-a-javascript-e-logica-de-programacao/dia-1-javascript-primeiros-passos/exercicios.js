// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

// const a = 25;
// const b = 20;

// let soma = a + b;
// console.log(soma);

// let subtrai = a-b;
// console.log(subtrai);

// let multiplica = a * b;
// console.log(multiplica);

// let divide = a / b;
// console.log(divide);

// let modulo = 25 % 20;
// console.log(modulo);

// ___________________________________________________________________________________________

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

// const a = 10
// const b = 20
// if (a > 20){
//     console.log(a)
// }else{
//     console.log(b)
// }

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

// const a = 5;
// const b = 7;
// const c = 10;

// if (a > b && a > c){
//     console.log(a)
// }else if (b > a && b > c){
//     console.log(b)
// }else{
//     console.log(c)
// }

// 4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

// const a = 10;

// if (a > 0){
//     console.log("positive")
// }else if (a < 0){
//     console.log("negative")
// }else{
//     console.log("zero")
// }


//  5. Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

// Um ângulo será considerado inválido se não tiver um valor positivo.

// const triAngleA = 45;
// const triAngleB = 45;
// const triAngleC = 90;
// const triangle = triAngleA + triAngleB + triAngleC;
// const trianglePositive = triAngleA > 0 && triAngleB > 0 && triAngleC > 0;

// if (trianglePositive){
//     if (triangle === 180){
//         console.log(true)
//     } else if (triangle != 180){
//         console.log(false)
//     } 
// }else{
//     console.log("Triangulo inválido")


// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.

// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).

// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

// Exemplo: bishop (bispo) -> diagonals (diagonais)

// const chessPiece = 'bispo';

// switch (chessPiece.toLowerCase()) {
//   case 'rei':
//     console.log('Rei-> Uma casa apenas para qualquer direção.');
//     break;
//   case 'bispo':
//     console.log('Bispo-> Diagonal.');
//     break;
//   case 'rainha':
//     console.log('Rainha-> Diagonal, horizontal e vertical.');
//     break;
//   case 'cavalo':
//     console.log('Cavalo -> "L" pode pular sobre as peças.');
//     break;
//   case 'torre':
//     console.log('Torre -> Horizontal e vertical.');
//     break;
//   case 'peão':
//     console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
//     break;
//   default:
//     console.log('Erro, peça inválida!');
//     break;
// };

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.


// const grade = 76;

// if (grade < 0 || grade > 100) {
//   console.log("Erro, nota incorreta!");
// } else if (grade >= 90) {
//   console.log("A");
// } else if (grade >= 80) {
//   console.log("B");
// } else if (grade >= 70) {
//   console.log("C");
// } else if (grade >= 60) {
//   console.log("D");
// } else if (grade >= 50) {
//   console.log("E");
// } else {
//   console.log("F");
// }

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.


// const a = 10;
// const b = 25;
// const c = 35;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   console.log(true)
// }else{
//     console.log(false)
// };


// Exercício do professor


// const a = 1;
// const b = 3;
// const c = 5;

// let isEven = false;

// if ((a % 2 === 0 || b % 2 === 0 || c % 2 === 0)) {
//   isEven = true;
// };
// console.log(isEven);

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.


// const a = 1;
// const b = 3;
// const c = 5;

// let isOdd = false;

// if ((a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0)) {
//   isOdd = true;
// };
// console.log(isOdd);

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

// Atente que, sobre o custo do produto, incide um imposto de 20%.

// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

// valorCustoTotal = valorCusto + impostoSobreOCusto

// lucro = valorVenda - valorCustoTotal (lucro de um produto)


// const custoProduto = 25;
// const valorVenda = 80;

// if (custoProduto >= 0 && valorVenda >= 0) {
//   const custoTotalProduto = custoProduto * 1.2;
//   const valorLucro = (valorVenda - custoTotalProduto) * 1000; 
//   console.log(valorLucro);
// } else {
//   console.log("Valores negativos não são aceitos");
// };

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:

// INSS (Instituto Nacional do Seguro Social)
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR (Imposto de Renda)
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,80 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?

// ESSE EXERCÍCIO EU NÃO CONSEGUI REALIZAR SOZINHO :/


let aliquotINSS;
let aliquotIR;

const grossSalary = 2000.00;

if (grossSalary <= 1556.94) {
  aliquotINSS = grossSalary * 0.08;
} else if (grossSalary <= 2594.92) {
  aliquotINSS = grossSalary * 0.09;
} else if (grossSalary <= 5189.82) {
  aliquotINSS = grossSalary * 0.11;
} else {
  aliquotINSS = 570.88;
}

const baseSalary = grossSalary - aliquotINSS;

if (baseSalary <= 1903.98) {
  aliquotIR = 0;
} else if (baseSalary <= 2826.65) {
  aliquotIR = (baseSalary * 0.075) - 142.80;
} else if (baseSalary <= 3751.05) {
  aliquotIR = (baseSalary * 0.15) - 354.80;
} else if (baseSalary <= 4664.68) {
  aliquotIR = (baseSalary * 0.225) - 636.13;
} else {
  aliquotIR = (baseSalary * 0.275) - 869.36;
};

console.log("Salário: " + (baseSalary - aliquotIR));