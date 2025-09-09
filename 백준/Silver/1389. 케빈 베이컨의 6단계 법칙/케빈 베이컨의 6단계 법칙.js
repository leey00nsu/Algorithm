const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// bfs

const [N, M] = input[0].split(" ").map(Number);

const map = new Map();

for (let i = 1; i <= M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  if (map.get(start)) {
    map.set(start, [...map.get(start), end]);
  } else {
    map.set(start, [end]);
  }

  if (map.get(end)) {
    map.set(end, [...map.get(end), start]);
  } else {
    map.set(end, [start]);
  }
}

const result = [];

function bfs(start) {
  const visited = new Array(N + 1).fill(false);

  const queue = [[start, 0]];

  visited[start] = true;

  let bacon = 0;

  while (queue.length > 0) {
    const [target, count] = queue.shift();
    bacon += count;

    const next = map.get(target) ?? [];

    next.forEach((n) => {
      if (!visited[n]) {
        visited[n] = true;
        queue.push([n, count + 1]);
      }
    });
  }

  return bacon;
}

for (let i = 1; i <= N; i++) {
  const bacon = bfs(i);

  result.push([i, bacon]);
}

result.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

console.log(result[0][0]);
