const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let count = 1;
let current = 666;

while (count < N) {
  current += 1;

  if (String(current).split("666").length - 1 >= 1) {
    count += 1;
  }
}

console.log(current);
