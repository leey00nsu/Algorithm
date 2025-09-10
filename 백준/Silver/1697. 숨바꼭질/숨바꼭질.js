const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 최단 거리 bfs

const [N, K] = input[0].split(" ").map(Number);

const distance = new Array(100001).fill(-1);

const queue = new Array(N);
let head = 0;
let tail = 0;

distance[N] = 0;
queue[tail++] = N;

while (head < tail) {
  const current = queue[head++];
  const range = [current - 1, current + 1, current * 2];

  for (const r of range) {
    if (r < 0 || r > 100000) continue;
    if (distance[r] !== -1) continue;

    distance[r] = distance[current] + 1;

    queue[tail++] = r;
  }
}

console.log(distance[K]);
