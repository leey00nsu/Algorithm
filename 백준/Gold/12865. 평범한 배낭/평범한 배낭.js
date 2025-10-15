const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputCursor = 0;

const [N, K] = input[inputCursor++].split(" ").map(Number);

const items = [];

const dp = Array(N + 1)
  .fill(0)
  .map(() => Array(K + 1).fill(0));

for (let i = 0; i < N; i++) {
  const [w, v] = input[inputCursor++].split(" ").map(Number);

  items.push([w, v]);
}

for (let i = 1; i <= N; i++) {
  const [w, v] = items[i - 1];

  for (let j = 1; j <= K; j++) {
    dp[i][j] = dp[i - 1][j];

    if (j >= w) {
      dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i][j]);
    }
  }
}

console.log(dp[N][K]);
