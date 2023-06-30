function getMaxWithout(arr, withoutIndex) {
  let max = 0;
  arr.forEach((el, index) => {
    if (el > max && index !== withoutIndex) max = el;
  });

  return max;
}

function solution(land) {
  let landLength = land.length;
  let dp = [];

  dp[0] = [...land[0]];
  for (let i = 1; i < landLength; i++) {
    let rows = [];
    for (let j = 0; j < 4; j++) {
      rows.push(0);
    }

    dp.push(rows);
  }

  for (let i = 1; i < landLength; i++) {
    for (let j = 0; j < 4; j++) {
      dp[i][j] = getMaxWithout(dp[i - 1], j) + land[i][j];
    }
  }

  return Math.max(...dp[landLength - 1]);
}