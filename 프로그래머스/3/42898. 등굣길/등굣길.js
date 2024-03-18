/*
격자의 크기 m,n 안에서 오른쪽과 아래쪽으로만 움직일 수 있다.
시작 점이 (1,1) 이라고 할 때, 학교가 있는 좌표까지의 최단경로의 개수를 구한다.


*/

function solution(m, n, puddles) {
  const dp = Array.from(Array(n + 1), () => Array(m + 1).fill(1));

  for (let i = 0; i < n + 1; i++) {
    for (let j = 0; j < m + 1; j++) {
      if (i === 0) dp[i][j] = 0;
      if (j === 0) dp[i][j] = 0;
    }
  }

  puddles.forEach((puddle) => {
    const [x, y] = puddle;
    dp[y][x] = 0;
  });

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (i === 1 && j === 1) continue;
      if (dp[i][j] === 0) continue;

      dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % 1000000007;
    }
  }

  return dp[n][m] % 1000000007;
}