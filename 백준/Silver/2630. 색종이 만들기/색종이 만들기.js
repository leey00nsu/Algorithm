const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);

const array = [];

let white = 0;
let blue = 0;

for (let i = 1; i <= N; i++) {
  const subArray = input[i].split(" ").map(Number);

  array.push(subArray);
}

function checkAndSlice(x, y, size) {
  if (isSame(x, y, size)) {
    array[x][y] === 0 ? white++ : blue++;

    return;
  }

  const half = size / 2;

  checkAndSlice(x, y, half);
  checkAndSlice(x, y + half, half);
  checkAndSlice(x + half, y, half);
  checkAndSlice(x + half, y + half, half);
}

function isSame(x, y, size) {
  const color = array[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (array[i][j] !== color) return false;
    }
  }

  return true;
}

checkAndSlice(0, 0, N);

console.log(white);
console.log(blue);
