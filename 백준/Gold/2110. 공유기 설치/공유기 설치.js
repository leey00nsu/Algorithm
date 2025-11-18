const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 거리의 최대값

const [N, C] = input[0].split(" ").map(Number);

const distances = [];

for (let i = 1; i <= N; i++) {
  const distance = Number(input[i]);

  distances.push(distance);
}

distances.sort((a, b) => a - b);

function ok(mid) {
  let count = 1;
  let current = distances[0];

  for (let i = 1; i < distances.length; i++) {
    const dist = distances[i];

    if (dist - current >= mid) {
      current = dist;
      count++;
    }
  }

  return count >= C;
}

let low = 1;
let high = distances.at(-1) - distances[0];

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
