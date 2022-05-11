// let add = (...args) => args[0] + args[1];

let add = (a, b) => a + b;

// let subtract = (...args) => args[0] - args[1];

let subtract = (a, b) => a - b;

// let sum = (args) => {
  // let total = 0;
  // args.forEach((arg) => total += arg);
  // return total
  // };
  
let sum = (args) => args.reduce(
  (total, current) => total + current
  , 0);
  
// let multiply = (args) => {
  //   let total = 1;
  //   args.forEach((arg) => total *= arg);
  //   return total
  // };

let multiply = (args) => args.reduce(
  (total, current) => total * current
  , 1);

// let power = (...args) => args[0] ** args[1];

let power = (a, b) => a ** b;

let factorial = (arg) => {
  let total = 1;
  for (let i = 2; i <= arg; i++) {
    total *= i;
  }
  return total
}

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
