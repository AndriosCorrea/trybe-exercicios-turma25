// Exercícios do bloco 8 dia 4

// 1 - Dada uma matriz, transforme em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(arrays) {
     return arrays.reduce((acc, curr) => acc.concat(curr), [])
 
  }
  console.log(flatten(arrays))