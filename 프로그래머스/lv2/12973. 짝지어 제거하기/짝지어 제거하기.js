function findMatch(s) {
  let s_arr = [...s];
  let stack = [];

  if (s_arr.length % 2 === 1) {
    return 0;
  }

  for (let i = 0; i < s_arr.length; i++) {
    if (stack[stack.length - 1] === s_arr[i]) {
      stack.pop();
    } else {
      stack.push(s_arr[i]);
    }
  }

  return stack.length ? 0 : 1;
}

function solution(s)
{
    var answer = findMatch(s);


    return answer;
}