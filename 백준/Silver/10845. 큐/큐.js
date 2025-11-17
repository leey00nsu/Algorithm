const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const queue = [];
const result = [];

let cursor = 0;

for (let i = 1; i <= N; i++) {
  let [op, number] = input[i].split(" ");

  if (op === "push") {
    queue.push(Number(number));
  }

  if (op === "front") {
    if (queue.length <= cursor) result.push("-1");
    else result.push(queue[cursor]);
  }

  if (op === "back") {
    if (queue.length <= cursor) result.push("-1");
    else result.push(queue.at(-1));
  }

  if (op === "pop") {
    if (queue.length <= cursor) result.push("-1");
    else result.push(queue[cursor++]);
  }

  if (op === "size") {
    result.push(queue.length - cursor);
  }

  if (op === "empty") {
    if (queue.length <= cursor) result.push("1");
    else result.push(0);
  }
}

console.log(result.join("\n"));
