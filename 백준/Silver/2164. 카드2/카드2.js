const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const cards = Array(N)
  .fill(0)
  .map((_, idx) => idx + 1);

let cursor = 0;
let count = N;

if (N === 1) {
  console.log(1);
} else {
  while (true) {
    cursor++;
    count--;

    if (count === 1) break;

    const top = cards[cursor++];
    cards.push(top);
  }

  console.log(cards.at(-1));
}
