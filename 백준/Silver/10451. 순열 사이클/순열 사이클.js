const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let inputCursor = 0;

const T = Number(input[inputCursor++]);

for (let t = 0; t < T; t++) {
  const N = Number(input[inputCursor++]);
  const arr = [0, ...input[inputCursor++].split(" ").map(Number)];

  const visited = Array(N + 1).fill(false);
  let count = 0;

  function dfs(start) {
    const stack = [start];

    while (stack.length) {
      const current = stack.pop();
      if (visited[current]) continue;

      visited[current] = true;

      const next = arr[current];
      if (!visited[next]) {
        stack.push(next);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  console.log(count);
}
