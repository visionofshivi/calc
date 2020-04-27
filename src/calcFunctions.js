const sum = (a, b) => a + b;

const product = (a, b) => a * b;

const subtract = (a, b) => a - b;

const remainder = (a, b) => a % b;

const quotient = (a, b) => a / b;

const hcf = (a, b) => {
  const c = remainder(a, b);
  if (c == 0) {
    return b;
  }
  return hcf(b, c);
};

const lcm = (a, b) => {
  return product(a, b) / hcf(a, b);
};
module.exports = {sum, product, subtract, remainder, quotient, hcf, lcm};
