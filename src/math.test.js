const soma = require('./math');

test('soma 2 + 2 é 4', () => {
  expect(soma(2, 2)).toBe(4);
});