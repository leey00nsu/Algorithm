const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// dfs

const [N, M] = input[0].split(" ").map(Number);

const campus = [];
const visitMap = {};
let people = 0;

for (let i = 1; i <= N; i++) {
  const subArr = input[i].split("");

  campus.push(subArr);
}

function dfs(i, j) {
  visitMap[`${i},${j}`] = true;

  if (campus[i][j] === "P") people += 1;

  if (canVisit(i + 1, j)) dfs(i + 1, j);
  if (canVisit(i, j + 1)) dfs(i, j + 1);
  if (canVisit(i - 1, j)) dfs(i - 1, j);
  if (canVisit(i, j - 1)) dfs(i, j - 1);
}

function canVisit(i, j) {
  if (i < 0 || i >= N || j < 0 || j >= M) return false;
  if (visitMap[`${i},${j}`]) return false;
  if (campus[i][j] === "X") return false;

  return true;
}

function findStartPosition() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (campus[i][j] === "I") return [i, j];
    }
  }
}

const [startI, startJ] = findStartPosition();

dfs(startI, startJ);

people > 0 ? console.log(people) : console.log("TT");
