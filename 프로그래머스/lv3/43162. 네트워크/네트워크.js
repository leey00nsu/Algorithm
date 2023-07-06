function solution(n, computers) {
  let nodes = {};
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    nodes[i] = [];
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) nodes[i].push(String(j));
    }
  }

  let computerNodes = [...Object.keys(nodes)];
  let visited = [];

  function dfs(node) {
    if (!visited.includes(node)) {
      visited.push(node);
      nodes[node].forEach((n) => dfs(n));
    }
  }

  while (computerNodes.length > 0) {
    let popped = computerNodes.pop();
    if (!visited.includes(popped)) {
      dfs(popped);
      cnt += 1;
    }
  }

  return cnt;
}