const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const numbers = input[1].split(" ").map(Number);

numbers.sort((a, b) => a - b);

function permutations(arr, r) {
  const result = [];

  function dfs(path, used) {
    if (path.length === r) {
      result.push([...path]);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue;

      used[i] = true;
      path.push(arr[i]);
      dfs(path, used);
      path.pop();
      used[i] = false;
    }
  }

  dfs([], new Array(arr.length).fill(false));

  return result;
}

const result = [...new Set(permutations(numbers, M).map((x) => x.join(" ")))];

result.forEach((r) => {
  console.log(r);
});
