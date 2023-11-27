// 엘리베이터에 -1,1,-10,10,-100,100 과 같이 절대값이 10의 제곱 형태인 정수들이 적힌 버튼이 있다.
// 버튼을 누르면 현재 층 + 버튼 값 층으로 이동한다.
// 만약 더한 값이 0보다 작으면 움직이지 않는다.
// 0층부터 시작한다.

// 7
// 1,1,1,1,1,1,1 => 7
// 10,-1,-1,-1 => 4

// 90
// 10,...,10 => 9
// 100,-10 => 2

function solution(storey) {
  let cnt = 0;
  let arr = String(storey).split("").reverse().map(Number);

  arr.forEach((n, index) => {
    if (n === 10) {
      n = 0;
      if (index === arr.length - 1) {
        cnt += 1;
      } else {
        arr[index + 1] += 1;
      }
    }
    if (n > 5) {
      if (index === arr.length - 1) {
        cnt += 1;
      } else {
        arr[index + 1] += 1;
      }
      cnt += 10 - n;
    } else if (n === 5) {
      if (arr[index + 1] >= 5) {
        if (index === arr.length - 1) {
          cnt += 1;
        } else {
          arr[index + 1] += 1;
        }
        cnt += 10 - n;
      } else {
        cnt += n;
      }
    } else {
      cnt += n;
    }
  });

  return cnt;
}