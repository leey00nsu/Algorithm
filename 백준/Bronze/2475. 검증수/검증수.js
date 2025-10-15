const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B, C, D, E] = input[0].split(" ").map(Number);

const result = (A * A + B * B + C * C + D * D + E * E) % 10;

console.log(result);
