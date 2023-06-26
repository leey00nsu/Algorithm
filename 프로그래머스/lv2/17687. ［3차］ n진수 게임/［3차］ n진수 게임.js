function solution(n, t, m, p) {
  let answer = [];
  let order = 1;
  let stack = [];
  for (let i = 0; i < t * m; i++) {
    stack.push(...i.toString(n));
  }

  stack = stack.reverse();

  for (let i = 0; i < t * m; i++) {
    if (order === p) {
      answer.push(stack.pop().toUpperCase());
    } else {
      stack.pop();
    }
    order += 1;
    if (order > m) order = 1;
  }

  return answer.join("");
}