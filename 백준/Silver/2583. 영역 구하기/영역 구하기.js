const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, K] = input[0].split(" ").map(Number);

const arr = Array(M)
  .fill(0)
  .map((x) => Array(N).fill(false));

for (let k = 1; k <= K; k++) {
  const [x1, y1, x2, y2] = input[k].split(" ").map(Number);

  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      arr[i][j] = true;
    }
  }
}

const dx = [0, -1, 1, 0];
const dy = [1, 0, 0, -1];
const areas = [];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!arr[i][j]) {
      const stack = [[i, j]];
      arr[i][j] = true;
      let area = 0;

      while (stack.length) {
        const [curX, curY] = stack.pop();
        area++;

        for (let i = 0; i < 4; i++) {
          const newX = curX + dx[i];
          const newY = curY + dy[i];

          if (newX >= M || newX < 0) continue;
          if (newY >= N || newY < 0) continue;
          if (arr[newX][newY]) continue;

          arr[newX][newY] = true;

          stack.push([newX, newY]);
        }
      }

      areas.push(area);
    }
  }
}

areas.sort((a, b) => a - b);

console.log(areas.length);
console.log(areas.join(" "));
