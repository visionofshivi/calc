const assert = require('assert');
const {sum} = require('../src/calcFunctions');

describe('Sum', () => {
  it('Should give the sum of the given number', () => {
    assert.strictEqual(sum(1, 2), 3);
  });
});
