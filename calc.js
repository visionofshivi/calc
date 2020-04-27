const {
  sum,
  product,
  subtract,
  remainder,
  quotient,
  hcf,
  lcm,
} = require('./src/calcFunctions');

const main = () => {
  const [, , action, num1, num2] = process.argv;
  const actions = {
    '--sum': sum,
    '--product': product,
    '--subtract': subtract,
    '--remainder': remainder,
    '--quotient': quotient,
    '--hcf': hcf,
    '--lcm': lcm,
  };
  const doAction = actions[action];
  const result = doAction(+num1, +num2);
  console.log(result);
};

main();
