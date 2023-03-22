function isRightBracket(s) {
  let depth = 0;
  let s_arr = [...s];
  s_arr.reverse();

  while (s_arr.length > 0) {
    let el = s_arr.pop();
    if (el === "(") {
      depth += 1;
    } else {
      if (depth > 0) depth -= 1;
      else return false;
    }
  }

  if (depth === 0) return true;
  else return false;
}


function solution(s){
    var answer = isRightBracket(s);

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    return answer;
}