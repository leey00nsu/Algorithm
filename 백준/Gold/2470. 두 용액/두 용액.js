const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 투포인터

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);

let l = 0;
let r = arr.length - 1;

let min = Infinity;
const minValue = [Infinity, Infinity];

while (l < r) {
  const sum = arr[l] + arr[r];

  if (Math.abs(sum - 0) < Math.abs(min - 0)) {
    min = sum;
    [minValue[0], minValue[1]] = [arr[l], arr[r]];
  } else if (sum > 0) {
    r--;
  } else {
    l++;
  }
}

console.log(minValue.join(" "));
