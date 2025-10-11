const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputCursor = 0;
const [N, M] = input[inputCursor++].split(" ").map(Number);

const arr = [];
const sumArr = [];

for (let i = 0; i < N; i++) {
  const subArr = input[inputCursor++].split(" ").map(Number);
  arr.push([...subArr]);
}

for (let i = 0; i < N + 1; i++) {
  sumArr.push(Array(N + 1).fill(0));
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    sumArr[i][j] =
      arr[i - 1][j - 1] +
      sumArr[i - 1][j] +
      sumArr[i][j - 1] -
      sumArr[i - 1][j - 1];
  }
}

for (let k = 0; k < M; k++) {
  let [x1, y1, x2, y2] = input[inputCursor++].split(" ").map(Number);

  const result =
    sumArr[x2][y2] -
    sumArr[x1 - 1][y2] -
    sumArr[x2][y1 - 1] +
    sumArr[x1 - 1][y1 - 1];

  console.log(result);
}
