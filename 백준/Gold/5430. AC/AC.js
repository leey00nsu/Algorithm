const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 배열을 두 개로 만들어서 사용한다
// 또는 포인터로 접근?

const T = Number(input[0]);

for (let t = 1; t < input.length; t += 3) {
  const p = input[t].split("");
  let n = Number(input[t + 1]);
  let arrInput = [...input[t + 2]];
  arrInput.shift();
  arrInput.pop();

  arrInput = arrInput.join("");

  const arr = arrInput
    .split(",")
    .filter((x) => x)
    .map(Number);

  let left = 0;
  let right = arr.length - 1;
  let direction = 1;
  let isError = false;

  for (let i = 0; i < p.length; i++) {
    const currentP = p[i];

    if (currentP === "R") {
      direction *= -1;
    }

    if (currentP === "D") {
      if (n === 0) {
        isError = true;
        break;
      }
      if (direction === 1) left++;
      if (direction === -1) right--;
      n--;
    }
  }

  if (isError) {
    console.log("error");
  } else {
    const result = [];

    if (direction === 1) {
      for (let j = left; j <= right; j++) {
        result.push(arr[j]);
      }
    }
    if (direction === -1) {
      for (let j = right; j >= left; j--) {
        result.push(arr[j]);
      }
    }

    console.log(`[${result.join(",")}]`);
  }
}
