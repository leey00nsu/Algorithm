function removeZero(s) {
  let new_s = "";
  let cnt_zero = 0;
  for (i in s) {
    if (s[i] == 1) {
      new_s += s[i];
    } else {
      cnt_zero += 1;
    }
  }

  return [new_s, cnt_zero];
}

function toBinary(s) {
  let cnt = 0;
  let new_s = s;
  let tot_zero = 0;
  while (new_s !== "1") {
    cnt += 1;
    let [removed_s, cnt_zero] = removeZero(new_s);
    tot_zero += cnt_zero;
    new_s = removed_s.length.toString(2);
  }

  return [cnt, tot_zero];
}

function solution(s) {
    let answer = toBinary(s)
    return answer;

}