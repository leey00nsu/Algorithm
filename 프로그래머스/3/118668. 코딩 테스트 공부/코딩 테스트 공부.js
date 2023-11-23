// 알고력과 코딩력은 0 이상의 정수이다.
// 문제를 풀기 위해서는 문제가 요구하는 알고력과 코딩력이 필요하다.
// 알고력을 1 높이려면 1의 시간이 필요하다.
// 코딩력을 1 높이려면 1의 시간이 필요하다.
// 문제를 풀면 특정 값의 알고력과 코딩력이 증가한다.
// 같은 문제를 여러번 풀 수 있다.
// 모든 문제를 풀 수 있는 알고력과 코딩력이 되는 최단 시간을 구해라.

// 시간 소모 대비 알고력과 코딩력이 많이 증가하는 순으로 푸는것이 유리하다.


function solution(alp, cop, problems) {
  const dp = [];
  let maxAlpReq = alp;
  let maxCopReq = cop;

  problems.forEach((problem) => {
    const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problem;
    maxAlpReq = Math.max(maxAlpReq, alp_req);
    maxCopReq = Math.max(maxCopReq, cop_req);
  });

  for (let i = 0; i <= maxAlpReq; i++) {
    const subArr = [];
    for (let j = 0; j <= maxCopReq; j++) {
      subArr.push(Infinity);
    }
    dp.push(subArr);
  }

  dp[alp][cop] = 0;

  for (let i = alp; i <= maxAlpReq; i++) {
    for (let j = cop; j <= maxCopReq; j++) {
      if(i === maxAlpReq && j === maxCopReq) break
      if (i < maxAlpReq) {
        dp[i + 1][j] = dp[i + 1][j] > dp[i][j] + 1 ? dp[i][j] + 1 : dp[i + 1][j] 
      }
      if (j < maxCopReq) {
        dp[i][j + 1] = dp[i][j + 1] > dp[i][j] + 1 ? dp[i][j] + 1 : dp[i][j + 1]
      }

      for (const problem of problems) {
        const [alp_req, cop_req, alp_rwd, cop_rwd, cost] = problem;
        if (i >= alp_req && j >= cop_req) {
          const newAlp = Math.min(i + alp_rwd, maxAlpReq);
          const newCop = Math.min(j + cop_rwd, maxCopReq);
          dp[newAlp][newCop] = Math.min(dp[newAlp][newCop], dp[i][j] + cost);
        }
      }
    }
  }

  return dp[maxAlpReq][maxCopReq];
}