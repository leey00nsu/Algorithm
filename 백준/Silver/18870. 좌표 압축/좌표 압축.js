const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 배열에서 특정 값 보다 작은 개수를 구해야 한다.
// N이 1,000,000 이므로 N^2 로는 풀 수 없다. N log N으로 풀어야함
// set으로 중복 제거 후 오름차순으로 정렬하면 배열의 인덱스가 나보다 작은 개수를 의미하게 된다.

const N = Number(input[0]);

const arr = input[1].split(" ").map(Number);

const set = new Set(arr);
const setArr = [...set].sort((a, b) => a - b);

const map = {};

setArr.forEach((n, idx) => {
  map[n] = idx;
});

const result = arr.map((n) => map[n]);

console.log(result.join(" "));
