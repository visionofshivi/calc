const sum = (a, b) => a + b;

const product = (a, b) => a * b;

const subtract = (a, b) => a - b;

const remainder = (a, b) => {
  if (a == 0) {
    return 0;
  }
  if (b == 0) {
    return NaN;
  }
  return a % b;
};

const quotient = (a, b) => {
  if (a == 0) {
    return 0;
  }
  if (b == 0) {
    return Infinity;
  }
  return a / b;
};

const hcf = (a, b) => {
  if (a == 0) {
    return b;
  }
  if (b == 0) {
    return a;
  }
  const c = remainder(a, b);
  if (c == 0) {
    return b;
  }
  return hcf(b, c);
};

const lcm = (a, b) => {
  if (a == 0) {
    return 0;
  }
  if (b == 0) {
    return 0;
  }
  return product(a, b) / hcf(a, b);
};

module.exports = {
  sum,
  product,
  subtract,
  remainder,
  quotient,
  hcf,
  lcm,
};
