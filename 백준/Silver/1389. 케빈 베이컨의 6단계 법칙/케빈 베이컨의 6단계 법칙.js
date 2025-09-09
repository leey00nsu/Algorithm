const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// bfs

const [N, M] = input[0].split(" ").map(Number);
const graph = [];
for (let i = 0; i <= N; i++) {
  graph[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  graph[start].push(end);
  graph[end].push(start);
}

const result = [];

function bfs(start) {
  const distance = new Array(N + 1).fill(-1);
  const queue = new Array(N);

  let head = 0;
  let tail = 0;

  distance[start] = 0;
  queue[tail++] = start;

  while (head < tail) {
    const current = queue[head++];

    for (const next of graph[current]) {
      if (distance[next] === -1) {
        distance[next] = distance[current] + 1;
        queue[tail++] = next;
      }
    }
  }

  let sum = 0;

  for (let i = 1; i <= N; i++) {
    sum += distance[i];
  }

  return sum;
}

for (let i = 1; i <= N; i++) {
  const bacon = bfs(i);

  result.push([i, bacon]);
}

result.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

console.log(result[0][0]);
