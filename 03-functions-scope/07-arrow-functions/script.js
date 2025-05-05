// function add(a, b) {
//   return a + b;
// }

// Arrow Function syntax

const add = (a, b) => {
  return a + b;
};

// If only one line expression, we can shorten this by getting rid of return statement and the curly braces

// Implicit Return
const subtract = (a, b) => a - b;

// Can shorten it up even further if the arrow function has a single parameter, we don't need to have parentheses (). Althought I've set up prettier so it puts the parentheses () in automatically

const double = (a) => a * 2;

// Returning an object
const createObj = () => ({
  name: 'Brad',
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function (n) {
  console.log(n);
});

// Arrow function in a callback
numbers.forEach((n) => console.log(n));

console.log(add(1, 2));
console.log(subtract(10, 5));
console.log(double(20));
console.log(createObj());
