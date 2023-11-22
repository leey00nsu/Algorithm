// 한 번에 1칸 또는 2칸을 뛸 수 있다.
// 끝에 도달하는 방법의 개수를 알아내야 한다.
// dp로 해결
// 값이 커짐에 따라 숫자 자료형을 넘어갈 수 있으므로 BigInt로 계산 후 숫자로 변환

function solution(n) {
  let dp = [1n, 1n];

  for (let i = 2; i <= n; i++) {
    dp[i] = BigInt(dp[i - 2]) + BigInt(dp[i - 1]);
  }

  return Number(dp[n] % BigInt(1234567));
}