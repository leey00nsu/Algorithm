const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// sliding window?

const N = Number(input[0]);
const fruits = input[1].split(" ").map(Number);

const map = new Map();

let left = 0;
let right = 0;
let kinds = 0;
let answer = 0;

while (right < N) {
  const rightFruit = fruits[right++];
  map.set(rightFruit, (map.get(rightFruit) || 0) + 1);

  if (map.get(rightFruit) === 1) kinds++;

  while (kinds > 2) {
    const leftFruit = fruits[left++];
    map.set(leftFruit, map.get(leftFruit) - 1);

    if (map.get(leftFruit) === 0) {
      map.delete(leftFruit);
      kinds--;
    }
  }

  answer = Math.max(answer, right - left);
}

console.log(answer);
