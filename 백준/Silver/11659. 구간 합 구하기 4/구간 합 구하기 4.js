const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 100,000 * 100,000 = 10,000,000,000

const [N, M] = input[0].split(" ").map(Number);

const array = Array.from(input[1].split(" ").map(Number));

const dp = new Array(N + 1).fill(0);

dp[0] = 0;

for (let i = 1; i <= N; i++) {
  dp[i] = dp[i - 1] + array[i - 1];
}

for (let i = 2; i < 2 + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  const result = dp[end] - dp[start - 1];

  console.log(result);
}
