const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const coins = [];

for (let i = 1; i <= n; i++) {
  const coin = Number(input[i]);

  coins.push(coin);
}

const dp = Array(k + 1).fill(10001);

dp[0] = 0;

for (let i = 1; i <= n; i++) {
  const coin = coins[i - 1];

  for (let j = coin; j <= k; j++) {
    if (dp[j] > 0) {
      dp[j] = Math.min(dp[j], dp[j - coin] + 1);
    }
  }
}

if (dp[k] == 10001) {
  console.log("-1");
} else {
  console.log(dp[k]);
}
