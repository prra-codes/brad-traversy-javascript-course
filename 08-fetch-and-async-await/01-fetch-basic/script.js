// fetch('./movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Fetching a JSON file

fetch('./movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching a text file

fetch('./test.txt')
  .then((response) => response.text())
  .then((data) => console.log(data));

// From from an API

fetch('https://api.github.com/users')
  .then((response) => response.json())
  .then((data) => console.log(data));
