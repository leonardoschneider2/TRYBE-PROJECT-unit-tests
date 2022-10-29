/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers` retorna `true` quando o array contém apenas números e falso caso contrário', () => {
    expect(numbers([1, 2, 3, 4, 5, 6])).toEqual(true);
    expect(numbers([5, 8, 16])).toEqual(true);
    expect(numbers([1000, 101, 164, 947, 1.111])).toEqual(true);
    expect(numbers([1.111, 947, 164, 101, 1000])).toEqual(true);
    expect(numbers([1, 2, 3, ''])).toEqual(false);
  });
});
