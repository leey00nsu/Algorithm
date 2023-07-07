function checkSame(a, b, c, d) {
  if (!a || !b || !c || !d) return false;

  let result = [a, b, c, d].filter((n) => n === a);
  if (result.length === 4) return true;
  else return false;
}

function solution(m, n, board) {
  let cnt = 0;
  let stackArr = [];
  let needRemoveArr = [];
  for (let i = 0; i < n; i++) {
    stackArr.push([]);
  }
  board.forEach((blocks) => {
    [...blocks].forEach((block, index) => {
      stackArr[index].unshift(block);
    });
  });

  do {
    while (needRemoveArr.length > 0) {
      let popped = needRemoveArr.pop();
      let [x, y] = popped;
      stackArr[x].splice(y, 1, null);
    }

    for (let i = 0; i < n; i++) {
      stackArr[i] = stackArr[i].filter((block) => {
        if (block) return block;
      });
    }

    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < m - 1; j++) {
        if (
          checkSame(
            stackArr[i][j],
            stackArr[i + 1][j],
            stackArr[i][j + 1],
            stackArr[i + 1][j + 1]
          )
        ) {
          needRemoveArr.push([i, j], [i + 1, j], [i, j + 1], [i + 1, j + 1]);
        }
      }
    }
  } while (needRemoveArr.length > 0);

  for (let i = 0; i < n; i++) {
    cnt += stackArr[i].length;
  }

  return n * m - cnt;
}