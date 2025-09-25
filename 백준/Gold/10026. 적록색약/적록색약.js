const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const colors = [];
const stack1 = [];
const stack2 = [];

const visits = [];

for (let i = 1; i <= N; i++) {
  const color = input[i].split("");

  colors.push(color);
}

for (let i = 0; i < N; i++) {
  const visit = [];
  for (let j = 0; j < N; j++) {
    visit.push(false);
  }

  visits.push(visit);
}

stack1.push([0, 0]);
visits[0][0] = true;
let prevColor = colors[0][0];

const dir = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];

let area1 = 1;

while (stack1.length > 0) {
  const [x, y] = stack1.pop();
  const currentColor = colors[x][y];

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];

    if (nx < 0 || nx >= N) continue;
    if (ny < 0 || ny >= N) continue;

    if (visits[nx][ny]) continue;
    if (currentColor !== colors[nx][ny]) continue;

    visits[nx][ny] = true;
    stack1.push([nx, ny]);
  }

  if (stack1.length === 0) {
    let find = false;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visits[i][j]) {
          stack1.push([i, j]);
          visits[i][j] = true;
          find = true;
          area1++;
          break;
        }
      }

      if (find) break;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    visits[i][j] = false;
  }
}

stack2.push([0, 0]);
visits[0][0] = true;
prevColor = colors[0][0];

let area2 = 1;

while (stack2.length > 0) {
  const [x, y] = stack2.pop();
  const currentColor = colors[x][y];

  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][0];
    const ny = y + dir[i][1];

    if (nx < 0 || nx >= N) continue;
    if (ny < 0 || ny >= N) continue;

    if (visits[nx][ny]) continue;

    if (
      currentColor === colors[nx][ny] ||
      (currentColor === "R" && colors[nx][ny] === "G") ||
      (currentColor === "G" && colors[nx][ny] === "R")
    ) {
      visits[nx][ny] = true;
      stack2.push([nx, ny]);
    }
  }

  if (stack2.length === 0) {
    let find = false;
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (!visits[i][j]) {
          stack2.push([i, j]);
          visits[i][j] = true;
          find = true;
          area2++;
          break;
        }
      }

      if (find) break;
    }
  }
}

console.log(`${area1} ${area2}`);
