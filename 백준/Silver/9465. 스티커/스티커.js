const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputCursor = 0;

const T = Number(input[inputCursor++]);

for (let t = 0; t < T; t++) {
  const stickers = [];

  const n = Number(input[inputCursor++]);

  for (let i = 0; i < 2; i++) {
    const sticker = input[inputCursor++].split(" ").map(Number);

    stickers.push(sticker);
  }

  if (n === 1) {
    console.log(Math.max(stickers[0][0], stickers[1][0]));
    continue;
  }

  stickers[0][1] += stickers[1][0];
  stickers[1][1] += stickers[0][0];

  for (let i = 2; i < n; i++) {
    stickers[0][i] += Math.max(stickers[1][i - 1], stickers[1][i - 2]);
    stickers[1][i] += Math.max(stickers[0][i - 1], stickers[0][i - 2]);
  }

  console.log(Math.max(stickers[0][n - 1], stickers[1][n - 1]));
}
