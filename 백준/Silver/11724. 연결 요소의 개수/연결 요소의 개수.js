const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const map = {};
const visited = new Array(N + 1).fill(false);
let count = 0;

for (let i = 1; i <= M; i++) {
  const [u, v] = input[i].split(" ").map(Number);

  if (!map[u]) map[u] = [];
  if (!map[v]) map[v] = [];

  map[u].push(v);
  map[v].push(u);
}

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    dfs(i);
    count += 1;
  }
}

function dfs(v) {
  visited[v] = true;

  if (!map[v]) return;

  for (const i of map[v]) {
    if (!visited[i]) {
      dfs(i);
    }
  }
}

console.log(count);
