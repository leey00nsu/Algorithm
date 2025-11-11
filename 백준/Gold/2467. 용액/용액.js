const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const arr = input[1].split(" ").map(Number);

// nlogn

let left = 0;
let right = arr.length - 1;
let minValue = Infinity;
let minCombination = [-1, -1];

while (left < right) {
  const leftValue = arr[left];
  const rightValue = arr[right];

  const sum = leftValue + rightValue;

  if (Math.abs(minValue) > Math.abs(sum)) {
    minValue = Math.abs(sum);
    minCombination = [leftValue, rightValue];
  }

  if (sum === 0) {
    break;
  }
  if (sum > 0) {
    right--;
  }
  if (sum < 0) {
    left++;
  }
}

console.log(minCombination.join(" "));
