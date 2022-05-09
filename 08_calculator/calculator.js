let add = (...args) => args[0] + args[1];

let subtract = (...args) => args[0] - args[1];

let sum = (args) => {
  let total = 0;
  args.forEach((arg) => total += arg);
  return total
};

let multiply = (args) => {
  let total = 1;
  args.forEach((arg) => total *= arg);
  return total
};

let power = (...args) => args[0] ** args[1];

let factorial = (arg) => {
  let total = 1;
  for (let i = 2; i <= arg; i++) {
    total *= i;
  }
  return total
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
