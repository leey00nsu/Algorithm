const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12

const P = new Array(101).fill(1);

for (let i = 3; i <= 100; i++) {
  P[i] = P[i - 2] + P[i - 3];
}

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const N = Number(input[i]);
  console.log(P[N - 1]);
}
