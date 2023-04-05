function tournament(N, A, B) {
  let round = 1;
  let a = A;
  let b = B;

  if (N === 2) return 1;

  while (true) {
    if (Math.floor((a - 1) / 2) === Math.floor((b - 1) / 2)) {
      break;
    }
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round += 1;
    console.log(a, b);
  }

  return round;
}

function solution(n,a,b)
{
    var answer = tournament(n,a,b);

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}