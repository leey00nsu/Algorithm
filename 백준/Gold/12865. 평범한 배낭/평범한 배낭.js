const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, K] = input[0].split(" ").map(Number);

const items = [];
const dp = Array(K + 1).fill(0);

for (let i = 1; i <= N; i++) {
  const [W, V] = input[i].split(" ").map(Number);

  items.push([W, V]);
}

for (let i = 1; i <= N; i++) {
  const [W, V] = items[i - 1];

  for (let j = K; j >= W; j--) {
    dp[j] = Math.max(dp[j], dp[j - W] + V);
  }
}

console.log(dp[K]);
