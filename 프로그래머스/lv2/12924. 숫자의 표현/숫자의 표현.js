function seriesNumber(n) {
  let cnt = 0;

  for (let i = 1; i < n+1; i++) {
    let temp_n = i;
    let temp_tot = 0;
    while (temp_tot < n) {
      temp_tot += temp_n;
      temp_n += 1;
    }
    if (temp_tot === n) cnt += 1;
  }

  return cnt;
}

function solution(n) {
    var answer = seriesNumber(n);
    return answer;
}