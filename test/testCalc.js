const assert = require('assert');
const {
  sum,
  product,
  subtract,
  remainder,
  quotient,
  hcf,
  lcm,
} = require('../src/calcFunctions');

describe('Sum', () => {
  it('Should give the sum of the given number', () => {
    assert.strictEqual(sum(1, 2), 3);
  });
});

describe('product', () => {
  it('Should give the product of the given number', () => {
    assert.strictEqual(product(5, 4), 20);
  });
});

describe('Subtract', () => {
  it('Should give the minus of the given number', () => {
    assert.strictEqual(subtract(8, 4), 4);
  });
});

describe('remainder', () => {
  it('Should give the remainder of the given number', () => {
    assert.strictEqual(remainder(3, 5), 3);
  });
});

describe('quotient', () => {
  it('Should give the quotient of the given number', () => {
    assert.strictEqual(quotient(20, 4), 5);
  });
});

describe('hcf', () => {
  it('Should give the hcf of the given number', () => {
    assert.strictEqual(hcf(30, 31), 1);
  });
});

describe('lcm', () => {
  it('Should give the lcm of the given number', () => {
    assert.strictEqual(lcm(5, 4), 20);
  });
});
