const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 모든 지점에 대해 목표지점에 대한 거리, 목표지점은 1개이므로 다익스트라?
// 아니면 bfs로 풀 수도 있어보이는데

const [N, M] = input[0].split(" ").map(Number);

const arr = [];

for (let i = 1; i <= N; i++) {
  const subArr = input[i].split(" ").map(Number);

  arr.push(subArr);
}

let startI;
let startJ;

const visited = [];

for (let i = 0; i < N; i++) {
  const subVisited = new Array(M).fill(-1);

  visited.push(subVisited);
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (arr[i][j] === 2) {
      startI = i;
      startJ = j;
    }

    if (arr[i][j] === 0) {
      visited[i][j] = 0;
    }
  }
}

function bfs(i, j, depth) {
  const range = [
    [i + 1, j],
    [i, j + 1],
    [i - 1, j],
    [i, j - 1],
  ];

  for (r of range) {
    const [nextI, nextJ] = r;

    if (nextI >= 0 && nextI < N && nextJ >= 0 && nextJ < M) {
      if (visited[nextI][nextJ] === -1 && arr[nextI][nextJ] !== 0) {
        visited[nextI][nextJ] = depth + 1;
        queue.push([nextI, nextJ, depth + 1]);
      }
    }
  }
}

const queue = [[startI, startJ, 0]];

while (queue.length > 0) {
  const [nextI, nextJ, depth] = queue.shift();

  bfs(nextI, nextJ, depth);
}

visited[startI][startJ] = 0;

for (v of visited) {
  console.log(v.join(" "));
}
