const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

let meetings = [];
const result = [];

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  meetings.push([start, end]);
}

meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

result.push(meetings[0]);

for (let i = 1; i < meetings.length; i++) {
  const [start, end] = meetings[i];

  if (start >= result.at(-1)[1]) {
    result.push(meetings[i]);
  }
}

console.log(result.length);
