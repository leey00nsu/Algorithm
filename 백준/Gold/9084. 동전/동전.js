const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputCursor = 0;
const T = Number(input[inputCursor++]);

for (let t = 0; t < T; t++) {
  const N = Number(input[inputCursor++]);
  const coins = input[inputCursor++].split(" ").map(Number);
  const M = Number(input[inputCursor++]);

  const dp = Array(N + 1)
    .fill(0)
    .map((x) => Array(M + 1).fill(0));

  dp[0][0] = 1;

  for (let i = 1; i <= N; i++) {
    const coin = coins[i - 1];
    for (let j = 0; j <= M; j++) {
      dp[i][j] = dp[i - 1][j];

      if (j - coin >= 0) {
        dp[i][j] += dp[i][j - coin];
      }
    }
  }

  console.log(dp[N][M]);
}
