const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const arr = input[1].split(" ").map(Number);

function permutations(arr, r) {
  const result = [];

  function dfs(path, used) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < N; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(arr[i]);
      dfs(path, used);
      path.pop();
      used[i] = false;
    }
  }

  dfs([], new Array(N).fill(false));

  return result;
}

arr.sort((a, b) => a - b);

const result = permutations(arr, M);

result.forEach((r) => {
  console.log(r.join(" "));
});
