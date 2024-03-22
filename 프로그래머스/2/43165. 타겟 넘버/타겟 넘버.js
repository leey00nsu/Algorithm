function solution(numbers, target) {
  let cnt = 0;
  const stack = [[0, numbers]];

  while (stack.length > 0) {
    const [current, left] = stack.pop();

    if (left.length === 0) {
      if (current === target) cnt += 1;
      continue;
    }

    stack.push([current + left[0], left.slice(1)]);
    stack.push([current - left[0], left.slice(1)]);
  }

  return cnt;
}