function solution(topping) {
  let leftObj = new Map();
  let rightObj = new Map();
  let leftSide = [...topping];
  let rightSide = [];
  let cnt = 0;

  leftSide.forEach((el) => {
    if (leftObj.get(el)) leftObj.set(el, leftObj.get(el) + 1);
    else leftObj.set(el, 1);
  });

  for (let i = 0; i < topping.length; i++) {
    let popped = leftSide.pop();
    if (leftObj.get(popped) === 1) delete leftObj.delete(popped);
    else leftObj.set(popped, leftObj.get(popped) - 1);

    rightSide.push(popped);

    if (rightObj.get(popped)) rightObj.set(popped, rightObj.get(popped) + 1);
    else rightObj.set(popped, 1);

    if (leftObj.size === rightObj.size) cnt += 1;
  }
  return cnt;
}