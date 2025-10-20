const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

if (n === 0) {
  console.log("0");
} else {
  const numbers = [];

  for (let i = 1; i <= n; i++) {
    const number = Number(input[i]);

    numbers.push(number);
  }

  numbers.sort((a, b) => a - b);

  const coverage = Math.round(n * 0.15);

  const filteredNumbers = numbers.slice(coverage, n - coverage);

  let sum = 0;

  filteredNumbers.forEach((fN) => {
    sum += fN;
  });

  const average = sum / filteredNumbers.length;

  console.log(Math.round(average));
}
