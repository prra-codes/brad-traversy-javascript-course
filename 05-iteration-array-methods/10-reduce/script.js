const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);

// Using a for loop

const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }

  return acc;
};

console.log(sum3());
