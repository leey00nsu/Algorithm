const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);

if (A === B) {
  console.log(0);
} else {
  const queue = [[B, 1]];
  let cursor = 0;
  let enabled = false;

  const visited = new Set([B]);

  while (cursor < queue.length) {
    const [current, cnt] = queue[cursor++];

    if (current === A) {
      enabled = true;
      console.log(cnt);
      break;
    }

    if (current % 10 === 1) {
      const next = Math.floor(current / 10);
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, cnt + 1]);
      }
    }

    // 역연산 2: 짝수이면 2로 나누기
    if (current % 2 === 0) {
      const next = current / 2;
      if (!visited.has(next)) {
        visited.add(next);
        queue.push([next, cnt + 1]);
      }
    }
  }

  if (!enabled) {
    console.log(-1);
  }
}
