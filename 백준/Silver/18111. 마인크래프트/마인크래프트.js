const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, B] = input[0].split(" ").map(Number);
const removeCost = 2;
const addCost = 1;

const arr = [];

for (let i = 1; i <= N; i++) {
  const subArr = input[i].split(" ").map(Number);

  arr.push(subArr);
}

const results = [];

for (let h = 0; h <= 256; h++) {
  let remove = 0;
  let add = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      // 현재 목표 높이보다 높은경우
      if (arr[i][j] > h) {
        remove += arr[i][j] - h;
      }
      // 현재 목표 높이보다 낮은경우
      else {
        add += h - arr[i][j];
      }
    }
  }

  // 블록의 개수가 만족하지 않는 경우
  if (remove + B < add) continue;

  const time = remove * removeCost + add * addCost;

  results.push([time, h]);
}

results.sort((a, b) => a[0] - b[0] || b[1] - a[1]);

console.log(results[0][0], results[0][1]);
