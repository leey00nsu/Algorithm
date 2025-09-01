const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const heights = input[1].split(" ").map(Number);

function binarySearch(arr, left, right, k) {
  let answer = 0;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    let length = 0;

    arr
      .map((x) => Math.max(x - mid, 0))
      .forEach((y) => {
        length += y;
      });

    if (length >= k) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return answer;
}

const result = binarySearch(heights, 1, Math.max(...heights), M);

console.log(result);
