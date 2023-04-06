function getGcd(n1, n2) {
  let last = n2;
  while (true) {
    last = n1 % n2;
    if (last == 0) break;
    n1 = n2;
    n2 = last;
  }

  return n2;
}

function getLcm(arr) {
  let arr2 = [...arr];
  while (arr2.length > 1) {
    let n2 = arr2.pop();
    let n1 = arr2.pop();
    n2 = (n1 * n2) / getGcd(n1, n2);

    arr2.push(n2);
  }

  return arr2[0];
}

function solution(arr) {
    var answer = getLcm(arr);
    return answer;
}