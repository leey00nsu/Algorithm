const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = [];

let minDepth = Infinity;
let maxDepth = 0;

for (let i = 1; i <= N; i++) {
  const subArr = input[i].split(" ").map(Number);

  minDepth = Math.min(minDepth, Math.min(...subArr));
  maxDepth = Math.max(maxDepth, Math.max(...subArr));

  arr.push(subArr);
}

let maxCount = 1;

const dx = [0, 1, -1, 0];
const dy = [1, 0, 0, -1];

for (let t = minDepth; t <= maxDepth; t++) {
  const visited = Array(N + 1)
    .fill(0)
    .map((x) => Array(N + 1).fill(false));

  let count = 0;

  function dfs(x, y) {
    const stack = [[x, y]];

    while (stack.length) {
      const [curX, curY] = stack.pop();
      if (visited[curX][curY]) continue;

      visited[curX][curY] = true;

      for (let i = 0; i < 4; i++) {
        const nextX = curX + dx[i];
        const nextY = curY + dy[i];

        if (nextX >= N || nextX < 0) continue;
        if (nextY >= N || nextY < 0) continue;

        if (!visited[nextX][nextY] && arr[nextX][nextY] > t) {
          stack.push([nextX, nextY]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j] && arr[i][j] > t) {
        dfs(i, j);
        count++;
      }
    }
  }

  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);
