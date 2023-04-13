function rotateBracket(brackets) {
  let brackets_arr = [...brackets];
  let cnt = 0;

  for (let i = 0; i < brackets_arr.length; i++) {
    let temp_arr = [...brackets_arr];
    let stack = [];
    for (let j = 0; j < brackets_arr.length; j++) {
      let popped = temp_arr.pop();
      if (
        stack.length == 0 ||
        popped == "}" ||
        popped == ")" ||
        popped == "]"
      ) {
        stack.push(popped);
      } else {
        let last = stack.at(-1);

        if (
          (last == "}" && popped == "{") ||
          (last == ")" && popped == "(") ||
          (last == "]" && popped == "[")
        ) {
          stack.pop();
        } else {
          break;
        }
      }
    }

    if (stack.length === 0) {
      cnt += 1;
    }

    let shifted = brackets_arr.shift();
    brackets_arr.push(shifted);
  }

  return cnt;
}

function solution(s) {
    var answer = rotateBracket(s);
    return answer;
}