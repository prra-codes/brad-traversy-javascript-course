// Function Declaration

console.log(addDollarSign(100));
function addDollarSign(value) {
  return '$' + value;
}

// Function Expression

// console.log(addPlusSign(200));

const addPlusSign = function (value) {
  return '+' + value;
};

// console.log(addPlusSign(200));

// Hoisting is the process of moving all the functions and variable declarations to the top of the current scope before the code is run
