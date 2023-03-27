function counter(arr, target) {
  let cnt = arr.filter((char) => {
    if (char === target) return char;
  }).length;

  return cnt;
}

function nextLargeNum(n) {
  let nextNum = n;
  let n_arr = [...n.toString(2)];
  while (true) {
    nextNum += 1;
    let nextNum_bin = nextNum.toString(2);
    let nextNum_arr = [...nextNum_bin];

    if (counter(n_arr, "1") === counter(nextNum_arr, "1")) {
      break;
    }
  }

  return nextNum;
}

function solution(n) {
    var answer = nextLargeNum(n);
    return answer;
}