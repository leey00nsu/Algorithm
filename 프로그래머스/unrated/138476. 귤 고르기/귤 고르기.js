function getTangerine(k, tangerine) {
  let cnt = 0;
  let tangerines = 0;
  let obj = {};
  let arr = [];
  for (let i = 0; i < tangerine.length; i++) {
    if (obj[tangerine[i]]) {
      obj[tangerine[i]] += 1;
    } else {
      obj[tangerine[i]] = 1;
    }
  }

  for (let k in obj) {
    arr.push(obj[k]);
  }

  arr.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    if (a < b) return -1;
  });

  while (true) {
    cnt += 1;

    let max = arr.pop();
    tangerines += max;

    if (tangerines >= k) break;
  }

  return cnt;
}

function solution(k, tangerine) {
    var answer = getTangerine(k,tangerine);
    return answer;
}