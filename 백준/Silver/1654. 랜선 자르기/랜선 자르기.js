const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 랜선의 개수를 충족하면서, 랜선의 길이가 최대를 만족해야한다.

const [K, N] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i <= K; i++) {
  const line = Number(input[i]);

  arr.push(line);
}

arr.sort((a, b) => a - b);

function ok(mid) {
  let count = 0;

  arr.forEach((n) => {
    count += Math.floor(n / mid);
  });

  return count >= N;
}

let low = 1;
let high = Math.max(...arr);

let result = low;

while (low <= high) {
  const mid = Math.floor((low + high) / 2);

  if (ok(mid)) {
    result = mid;
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(result);
