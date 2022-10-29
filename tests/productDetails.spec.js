const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');
    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails('Refrigerante', 'Cerveja'))).toBe(true);
    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.keys(productDetails('Refrigerante', 'Cerveja')).length).toBe(2);
    // Teste se os dois itens dentro do array retornado pela função são objetos.
    for (let key of Object.values(productDetails('Refrigerante', 'Cerveja'))) {
      expect(typeof key).toBe('object');
    }
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(JSON.stringify(Object.entries(productDetails('a', 'b'))) !== JSON.stringify(Object.entries(productDetails('c', 'd')))).toBe(true);
    // Teste se os dois productIds terminam com 123.
    for (let values of Object(productDetails('a', 'b'))) {
      const final = JSON.stringify(values.details.productId);
      expect(final.substring(final.length - 4, final.length - 1)).toBe('123');
    }
  });
});
