const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const graph = [];

for (let i = 1; i <= N; i++) {
  const subGraph = input[i].split(" ").map(Number);

  graph.push(subGraph);
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][k] === 1 && graph[k][j] === 1) {
        graph[i][j] = 1;
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  console.log(graph[i].join(" "));
}
