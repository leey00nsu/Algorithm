const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [C, N] = input[0].split(" ").map(Number);

let infos = [];

for (let i = 1; i <= N; i++) {
  const [cost, count] = input[i].split(" ").map(Number);

  infos.push([cost, count]);
}

const maxCust = Math.max(...infos.map((x) => x[1]));

const dp = Array(C + maxCust + 1).fill(Infinity);
dp[0] = 0;

for (let i = 0; i <= dp.length - 1; i++) {
  for (let j = 0; j < infos.length; j++) {
    const [cost, count] = infos[j];
    const next = i + count;

    if (next >= dp.length) continue;

    dp[next] = Math.min(dp[next], dp[i] + cost);
  }
}

let answer = Infinity;
for (let i = C; i < dp.length; i++) {
  answer = Math.min(answer, dp[i]);
}
console.log(answer);
