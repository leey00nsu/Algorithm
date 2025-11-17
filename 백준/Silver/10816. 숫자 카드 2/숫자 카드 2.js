const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const numbers = input[1].split(" ").map(Number);

const M = Number(input[2]);

const targets = input[3].split(" ").map(Number);

const map = new Map();

numbers.forEach((n) => {
  if (map.has(n)) {
    map.set(n, map.get(n) + 1);
  } else {
    map.set(n, 1);
  }
});

const result = [];

targets.forEach((t) => {
  if (map.has(t)) {
    result.push(map.get(t));
  } else {
    result.push(0);
  }
});

console.log(result.join(" "));
