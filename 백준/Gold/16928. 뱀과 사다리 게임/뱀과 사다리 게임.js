const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const board = new Array(101).fill(-1);
const jump = new Array(101).fill(0);

for (let i = 1; i <= N + M; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  jump[start] = end;
}

const queue = [1];

let head = 0;
board[1] = 0;

while (queue.length > head) {
  const x = queue[head++];
  if (x === 100) break;

  for (let i = 1; i <= 6; i++) {
    let nx = x + i;
    if (nx > 100) continue;
    if (jump[nx]) nx = jump[nx];

    if (board[nx] !== -1) continue;
    board[nx] = board[x] + 1;
    queue.push(nx);
  }
}

console.log(board[100]);
