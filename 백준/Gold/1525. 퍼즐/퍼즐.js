const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let numbers = "";

for (let i = 0; i < 3; i++) {
  const subNumbers = input[i].split(" ").join("");

  numbers = numbers.concat(subNumbers);
}

function bfs() {
  const visited = new Map();

  const queue = [];

  queue.push(numbers);

  visited.set(numbers, 0);

  const dx = [0, 1, -1, 0];
  const dy = [1, 0, 0, -1];

  let cursor = 0;

  while (cursor < queue.length) {
    const popped = queue[cursor++];

    if (popped == "123456780") {
      return visited.get(popped);
    }

    const blankIndex = popped.indexOf("0");

    const blankX = Math.floor(blankIndex / 3);
    const blankY = blankIndex % 3;

    for (let i = 0; i < 4; i++) {
      const nextX = dx[i] + blankX;
      const nextY = dy[i] + blankY;

      if (nextX >= 3 || nextX < 0) continue;
      if (nextY >= 3 || nextY < 0) continue;

      const nextIndex = nextX * 3 + nextY;

      const arr = popped.split("");
      const tmp = arr[blankIndex];

      arr[blankIndex] = arr[nextIndex];
      arr[nextIndex] = tmp;

      const nextNumber = arr.join("");

      if (!visited.has(nextNumber)) {
        visited.set(nextNumber, visited.get(popped) + 1);
        queue.push(nextNumber);
      }
    }
  }

  return -1;
}

const result = bfs();

console.log(result);
