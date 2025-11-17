const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 01 배낭
// 체력은 무게, 기쁨은 가치로 판단한다.

const N = Number(input[0]);

const L = input[1].split(" ").map(Number);
const J = input[2].split(" ").map(Number);

const dp = Array(101)
  .fill(0)
  .map((x) => Array(101).fill(0));

for (let i = 1; i <= N; i++) {
  const l = L[i - 1];
  const j = J[i - 1];

  for (let w = 0; w <= 100; w++) {
    if (w < l) {
      dp[i][w] = dp[i - 1][w];
    } else {
      dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - l] + j);
    }
  }
}

console.log(dp[N][99]);
