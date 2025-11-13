const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const coordinates = [];

for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  coordinates.push([x, y]);
}

coordinates.push(coordinates[0]);

let xSum = 0;
let ySum = 0;

for (let i = 1; i < coordinates.length; i++) {
  xSum += coordinates[i - 1][0] * coordinates[i][1];
  ySum += coordinates[i - 1][1] * coordinates[i][0];
}

console.log((Math.abs(xSum - ySum) / 2).toFixed(1));
