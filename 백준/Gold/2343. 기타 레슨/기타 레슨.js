const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

function search(mid) {
  let count = 1;
  let sum = 0;

  arr.forEach((l) => {
    if (sum + l <= mid) {
      sum += l;
    } else {
      count += 1;
      sum = l;
    }
  });

  return count <= M;
}

let low = Math.max(...arr);
let high = arr.reduce((a, b) => a + b, 0);

let answer = high;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  if (search(mid)) {
    answer = mid;
    high = mid - 1;
  } else {
    low = mid + 1;
  }
}

console.log(answer);
