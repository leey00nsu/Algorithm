const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = Number(input[0]);

for (let t = 1; t <= T; t++) {
  const [start, end] = input[t].split(" ").map(Number);

  const visited = Array(10000).fill(false);

  let cursor = 0;
  const queue = [[start, ""]];

  while (cursor < queue.length) {
    const [current, str] = queue[cursor++];

    if (current === end) {
      console.log(str);
    }

    const D = getD(current);
    const S = getS(current);
    const L = getL(current);
    const R = getR(current);

    if (!visited[D]) {
      visited[D] = true;
      queue.push([D, str.concat("D")]);
    }
    if (!visited[S]) {
      visited[S] = true;
      queue.push([S, str.concat("S")]);
    }
    if (!visited[L]) {
      visited[L] = true;
      queue.push([L, str.concat("L")]);
    }
    if (!visited[R]) {
      visited[R] = true;
      queue.push([R, str.concat("R")]);
    }
  }
}

function getD(n) {
  let result = n * 2;

  return result % 10000;
}

function getS(n) {
  return n === 0 ? 9999 : n - 1;
}

function getL(n) {
  // 1000의 자리 숫자를 1로 내리고, 나머지 숫자를 *10 한다.
  return (n % 1000) * 10 + Math.floor(n / 1000);
}

function getR(n) {
  // 1의 자리 숫자를 *1000 하고, 나머지 숫자를 /10 한다.
  return (n % 10) * 1000 + Math.floor(n / 10);
}
