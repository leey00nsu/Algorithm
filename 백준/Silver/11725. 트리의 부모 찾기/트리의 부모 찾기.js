const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const graph = {};

const parents = Array(N + 1).fill(0);

parents[1] = 1;

for (let i = 1; i < N; i++) {
  const [u, v] = input[i].split(" ").map(Number);

  if (graph[u]) {
    graph[u].push(v);
  } else {
    graph[u] = [v];
  }

  if (graph[v]) {
    graph[v].push(u);
  } else {
    graph[v] = [u];
  }
}

const queue = [1];
let cursor = 0;

while (cursor < queue.length) {
  const current = queue[cursor++];

  const nodes = graph[current];

  if (!nodes || nodes.length === 0) continue;

  for (let i = 0; i < nodes.length; i++) {
    const curNode = nodes[i];

    if (parents[curNode]) continue;

    parents[curNode] = current;
    queue.push(curNode);
  }
}

for (let i = 2; i < parents.length; i++) {
  console.log(parents[i]);
}
