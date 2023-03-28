function fib_dp(n) {
  let dp = [BigInt(0), BigInt(1)];

  for (let i = 2; i < n + 1; i++) {
    dp.push(BigInt(dp[i - 2] + dp[i - 1]));
  }

  return dp[n] % BigInt(1234567);
}


function solution(n) {
    var answer = Number(fib_dp(n));
    return answer;
}