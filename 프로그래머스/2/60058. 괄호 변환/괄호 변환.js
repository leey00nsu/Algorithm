// (,) 의 개수가 같다면 균형잡힌 괄호 문자열이다.
// (,) 의 짝도 모두 맞다면 올바른 괄호 문자열이다.
// (()))( 은 균형잡힌 괄호 문자열이지만 , 올바른 괄호 문자열은 아니다.
// (())()은 균형잡힌 괄호 문자열이면서 , 올바른 괄호 문자열이다.
// 빈 물자열 또한 균형잡힌 괄호 문자열이다.

// 1. 문자열 w를 균형잡힌 괄호 문자열 u,v로 분리한다.
// 2. 문자열 u가 올바른 괄호 문자열이면 그대로 둔다.
//  2-1. 문자열 v에 대해 1번부터 다시 수행한다.
// 3. 문자열 u가 올바른 괄호 문자열이 아니면 다음을 수행한다.
//  3-1. 빈 문자열에 '(' 를 붙인다.
//  3-2. 문자열 v에 대해 1번부터 수행한 결과를 이어 붙인다.
//  3-3. ')' 를 붙인다.
//  3-4. u의 첫번째와 마지막을 제거하고 , 나머지 문자열의 괄호 방향을 반전시켜 뒤에 붙인다.
//  3-5. 생성된 문자열을 반환한다.


// (()))(
// (()) )(
// (()) )(,
// (()) )(,()

// ()))((()
// (
// ()
// )

// (())
// (
// ((
// (()
// (
// ()

function solution(p) {
  function isValidBracket(arr) {
    const stack = [];
    let index = 0;

    while (index < arr.length) {
      stack.push(arr[index]);
      while (stack.at(-1) === ")" && stack.at(-2) === "(") {
        stack.pop();
        stack.pop();
      }
      index += 1;
      if (stack[0] === ")") return false;
    }

    return true;
  }

  function reverseBracket(arr) {
    return [...arr].map((el) => (el === "(" ? ")" : "("));
  }

  function fixBracket(arr) {
    if (arr.length === 0) return "";

    let maxOpen = [...arr].filter((el) => el === "(").length;
    let maxClose = [...arr].filter((el) => el === ")").length;
    let open = 0;
    let close = 0;
    let index = 0;

    while (true) {
      if (arr[index] === "(") {
        open += 1;
      }
      if (arr[index] === ")") {
        close += 1;
      }
      index += 1;
      if (open === close) break;
    }

    const u = arr.slice(0, index);
    const v = arr.slice(index);

    if (isValidBracket(u)) {
      return u + fixBracket(v);
    } else {
      let strings = "(";
      strings += fixBracket(v);

      strings += ")";

      strings += reverseBracket(u.slice(1, u.length - 1)).join("");

      return strings;
    }
  }
  return isValidBracket(p) ? p : fixBracket(p);
}