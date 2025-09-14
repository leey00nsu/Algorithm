const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 슬라이딩 윈도우?

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2].split("");

let count = 0;
let answer = 0;

for (let i = 1; i < M - 1; ) {
  if (S[i - 1] === "I" && S[i] === "O" && S[i + 1] === "I") {
    count += 1;

    if (count >= N) {
      count -= 1;
      answer += 1;
    }
    i += 2;
  } else {
    count = 0;
    i += 1;
  }
}

console.log(answer);
