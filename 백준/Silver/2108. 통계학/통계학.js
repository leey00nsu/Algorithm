const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const numbers = [];

for (let i = 1; i <= N; i++) {
  const number = Number(input[i]);

  numbers.push(number);
}

numbers.sort((a, b) => a - b);

function case1(numbers) {
  let sum = 0;

  numbers.forEach((n) => {
    sum += n;
  });

  sum = sum / N;

  if (sum.toFixed(0) == -0) {
    return 0;
  }

  return sum.toFixed(0);
}

function case2(numbers) {
  const mid = Math.floor(N / 2);

  return numbers[mid];
}

function case3(numbers) {
  const countMap = new Map();

  numbers.forEach((n) => {
    if (countMap.has(n)) {
      countMap.set(n, countMap.get(n) + 1);
    } else {
      countMap.set(n, 1);
    }
  });

  const countArr = Array.from(countMap);
  countArr.sort((a, b) => a[1] - b[1] || b[0] - a[0]);

  const minValue = countArr.at(-1)[1];

  const hasMinValues = countArr.filter((x) => x[1] == minValue);

  if (hasMinValues.length > 1) {
    return countArr.at(-2)[0];
  }

  return countArr.at(-1)[0];
}

function case4(numbers) {
  const maxValue = numbers[N - 1];
  const minValue = numbers[0];

  return maxValue - minValue;
}

console.log(case1(numbers));
console.log(case2(numbers));
console.log(case3(numbers));
console.log(case4(numbers));
