const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [M, N, H] = input[0].split(" ").map(Number);

input.shift();

const tomato = [];
const queue = [];
const days = [];

for (let k = 0; k < H; k++) {
  const subArr = [];

  for (let i = 0; i < N; i++) {
    const subArr2 = [];

    for (let j = 0; j < M; j++) {
      subArr2.push(0);
    }

    subArr.push(subArr2);
  }

  days.push(subArr);
}

for (let k = 0; k < H; k++) {
  const subArr = [];

  for (let i = 0; i < N; i++) {
    const subArr2 = input.shift().split(" ").map(Number);

    subArr2.forEach((value, j) => {
      if (value === 1) {
        queue.push([i, j, k, 0]);
      }
      if (value === 0) {
        days[k][i][j] = -1;
      }
      if (value === -1) {
        days[k][i][j] = -2;
      }
    });

    subArr.push(subArr2);
  }

  tomato.push(subArr);
}

const dz = [0, 0, 0, 0, 1, -1];
const dx = [1, 0, -1, 0, 0, 0];
const dy = [0, 1, 0, -1, 0, 0];

let head = 0;

while (head < queue.length) {
  const [x, y, z, day] = queue[head++];

  days[z][x][y] = day;

  for (let i = 0; i < 6; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    const nz = z + dz[i];

    if (nx < 0 || nx >= N) continue;
    if (ny < 0 || ny >= M) continue;
    if (nz < 0 || nz >= H) continue;
    if (days[nz][nx][ny] !== -1) continue;
    if (tomato[nz][nx][ny] !== 0) continue;

    days[nz][nx][ny] = day + 1;
    queue.push([nx, ny, nz, day + 1]);
  }
}

let maxDay = 0;

for (let z = 0; z < H; z++) {
  for (let x = 0; x < N; x++) {
    for (let y = 0; y < M; y++) {
      if (days[z][x][y] === -1) {
        console.log(-1);
        process.exit();
      }

      maxDay = Math.max(maxDay, days[z][x][y]);
    }
  }
}

console.log(maxDay);
