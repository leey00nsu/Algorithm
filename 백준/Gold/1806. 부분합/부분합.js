const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

let l = 0;
let sum = 0;
let minLength = Infinity;

for (let r = 0; r < N; r++) {
  sum += arr[r];

  while (sum >= S) {
    minLength = Math.min(minLength, r - l + 1);
    sum -= arr[l];
    l++;
  }
}

if (!isFinite(minLength)) {
  console.log(0);
} else {
  console.log(minLength);
}
