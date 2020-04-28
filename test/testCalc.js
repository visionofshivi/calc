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

  it('Should give the sum of the negative number', () => {
    assert.strictEqual(sum(-1, -2), -3);
  });
});

describe('product', () => {
  it('Should give the product of the given number', () => {
    assert.strictEqual(product(5, 4), 20);
  });

  it('Should give the product of the negative number', () => {
    assert.strictEqual(product(-5, -4), 20);
  });

  it('Should give the product of the number when one of the num is 0', () => {
    assert.strictEqual(product(5, 0), 0);
  });
});

describe('Subtract', () => {
  it('Should give the minus of the given number', () => {
    assert.strictEqual(subtract(8, 4), 4);
  });

  it('Should give the minus of the given number', () => {
    assert.strictEqual(subtract(-8, -4), -4);
  });

  it('Should give the minus of the given number', () => {
    assert.strictEqual(subtract(8, -4), 12);
  });
});

describe('remainder', () => {
  it('Should give the remainder of the given number', () => {
    assert.strictEqual(remainder(3, 5), 3);
  });

  it('Should give the remainder of the given number when a = 0', () => {
    assert.strictEqual(remainder(0, 5), 0);
  });

  it('Should give the remainder of the given number when b = 0', () => {
    assert.strictEqual(remainder(3, 0), NaN);
  });
});

describe('quotient', () => {
  it('Should give the quotient of the given number', () => {
    assert.strictEqual(quotient(20, 4), 5);
  });

  it('Should give the quotient of the given number when a =0', () => {
    assert.strictEqual(quotient(0, 4), 0);
  });

  it('Should give the quotient of the given number when b =0', () => {
    assert.strictEqual(quotient(20, 0), Infinity);
  });
});

describe('hcf', () => {
  it('Should give the hcf of the given number', () => {
    assert.strictEqual(hcf(30, 31), 1);
  });

  it('Should give the hcf of the given number when a=0', () => {
    assert.strictEqual(hcf(0, 31), 31);
  });

  it('Should give the hcf of the given number when a=0 and b=0', () => {
    assert.strictEqual(hcf(0, 0), 0);
  });
});

describe('lcm', () => {
  it('Should give the lcm of the given number', () => {
    assert.strictEqual(lcm(5, 4), 20);
  });

  it('Should give the lcm of the given number when a=0 or b=0', () => {
    assert.strictEqual(lcm(5, 0), 0);
  });

  it('Should give the lcm of the given number', () => {
    assert.strictEqual(lcm(0, 4), 0);
  });
});
