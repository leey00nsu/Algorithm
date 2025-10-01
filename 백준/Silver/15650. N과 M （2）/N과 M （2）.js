const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

function getCombination(arr, r) {
  const result = [];

  function dfs(start, path) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      dfs(i + 1, path);
      path.pop();
    }
  }

  dfs(0, []);

  return result;
}

const arr = new Array(N).fill(0).map((_, i) => i + 1);

const combination = getCombination(arr, M);

combination.forEach((c) => {
  console.log(c.join(" "));
});
