const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputCursor = 0;
const T = Number(input[inputCursor++]);

for (let i = 0; i < T; i++) {
  const [N, M] = input[inputCursor++].split(" ").map(Number);
  const arr = input[inputCursor++].split(" ").map(Number);

  const mappedArr = arr.map((x, idx) => [idx, x]);
  const result = [];

  while (mappedArr.length > 0) {
    const maxValue = Math.max(...mappedArr.map((x) => x[1]));
    const [idx, current] = mappedArr.shift();

    if (current < maxValue) {
      mappedArr.push([idx, current]);
    } else {
      result.push([idx, current]);
    }
  }

  const targetIndex = result.findIndex((x) => x[0] === M);

  console.log(targetIndex + 1);
}
