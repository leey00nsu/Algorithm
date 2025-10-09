const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

function combination(arr, r) {
  const result = [];

  function dfs(start, path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i, path);

      path.pop();
    }
  }

  dfs(0, []);

  return result;
}

arr.sort((a, b) => a - b);

const result = [...new Set(combination(arr, M).map((x) => x.join(" ")))];

result.forEach((r) => {
  console.log(r);
});
