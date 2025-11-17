const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 01 배낭

const [N, T] = input[0].split(" ").map(Number);

const dp = Array(N + 1)
  .fill(0)
  .map((x) => Array(T + 1).fill(0));

const items = [];

for (let i = 1; i <= N; i++) {
  const [K, S] = input[i].split(" ").map(Number);

  items.push([K, S]);
}

for (let i = 1; i <= N; i++) {
  const [K, S] = items[i - 1];

  for (let j = 0; j <= T; j++) {
    if (j < K) {
      dp[i][j] = dp[i - 1][j];
    } else {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - K] + S);
    }
  }
}

console.log(dp[N][T]);
