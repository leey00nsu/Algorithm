const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]);

const originArr = Array(n)
  .fill(0)
  .map((_, idx) => idx + 1);

originArr.sort((a, b) => b - a);

const arr = [];
const command = [];
let hasError = false;

for (let i = 1; i <= n; i++) {
  const target = Number(input[i]);
  const current = arr.at(-1) ?? 0;

  if (target > current) {
    while (originArr.length > 0) {
      const next = originArr.pop();

      arr.push(next);
      command.push("+");

      if (next == target) {
        break;
      }
    }
  }

  while (arr.length > 0) {
    const next = arr.pop();

    if (next > target) {
      hasError = true;
      break;
    }

    command.push("-");

    if (next == target) {
      break;
    }
  }
}

if (hasError) {
  console.log("NO");
} else {
  command.forEach((c) => {
    console.log(c);
  });
}
