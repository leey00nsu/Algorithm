function printer(priorities, location) {
  let stack = [...priorities];
  let index_stack = [];
  let result = [];

  for (let i = 0; i < stack.length; i++) {
    index_stack.push(i);
  }

  while (stack.length > 0) {
    let max_p = Math.max(...stack);
    let shifted = stack.shift();
    let index_shifted = index_stack.shift();
    if (shifted === max_p) {
      result.push(index_shifted);
    } else {
      stack.push(shifted);
      index_stack.push(index_shifted);
    }
  }


  return result.indexOf(location) + 1;
}

function solution(priorities, location) {
    var answer = printer(priorities,location);
    return answer;
}