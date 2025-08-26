const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const result = [];
const map = {};
let count = 0;

for (let i = 1; i <= N; i++) {
  const name = input[i];

  map[name] = (map[name] ?? 0) + 1;
}

for (let i = N + 1; i <= N + M; i++) {
  const name = input[i];

  map[name] = (map[name] ?? 0) + 1;
}

for ([k, v] of Object.entries(map)) {
  if (v > 1) {
    count += 1;
    result.push(k);
  }
}

result.sort();

console.log(count);

for (r of result) {
  console.log(r);
}
