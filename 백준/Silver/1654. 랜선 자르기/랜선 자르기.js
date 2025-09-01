const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [K, N] = input[0].split(" ").map(Number);

const lines = [];

for (let i = 1; i <= K; i++) {
  const line = Number(input[i]);

  lines.push(line);
}

lines.sort((a, b) => a - b);

console.log(binarySearch(N));

function binarySearch(n) {
  let left = 1;
  let right = Math.max(...lines);

  let result = left;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let slices = 0;

    lines
      .map((x) => Math.floor(x / mid))
      .forEach((y) => {
        slices += y;
      });

    if (slices >= n) {
      result = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}
