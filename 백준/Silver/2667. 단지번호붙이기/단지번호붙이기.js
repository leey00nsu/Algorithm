const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// dfs

const N = Number(input[0]);

const arr = [];
const candidates = [];

for (let i = 1; i <= N; i++) {
  const subArr = input[i].split("").map(Number);

  arr.push(subArr);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1) {
      candidates.push([i, j]);
    }
  }
}

let groupCount = 0;
let result = new Map();

while (candidates.length > 0) {
  const [i, j] = candidates.pop();

  if (arr[i][j] !== 1) continue;

  dfs(i, j);

  groupCount += 1;
}

function dfs(i, j) {
  const range = [
    [i + 1, j],
    [i, j + 1],
    [i - 1, j],
    [i, j - 1],
  ];

  arr[i][j] = -1;
  result.set(
    groupCount,
    result.get(groupCount) ? result.get(groupCount) + 1 : 1
  );

  for (r of range) {
    const [nextI, nextJ] = r;

    if (nextI < 0 || nextI >= N) continue;
    if (nextJ < 0 || nextJ >= N) continue;

    if (arr[nextI][nextJ] === 1) dfs(nextI, nextJ);
  }
}

console.log(groupCount);

const resultArray = Array.from(result).sort((a, b) => a[1] - b[1]);

resultArray.forEach((r) => {
  console.log(r[1]);
});
