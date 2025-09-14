const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const M = Number(input[1]);
const S = input[2].split("");

let count = 0;

let targetString = ["I"];

for (let i = 0; i < N; i++) {
  targetString.push("O");
  targetString.push("I");
}

let currentString = [];

for (let i = 0; i < targetString.length; i++) {
  currentString.push(S[i]);
}

let right = currentString.length - 1;

while (right < M) {
  if (targetString.join("") == currentString.join("")) {
    count += 1;
  }

  currentString.shift();
  currentString.push(S[++right]);
}

console.log(count);
