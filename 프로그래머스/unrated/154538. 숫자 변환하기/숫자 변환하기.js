function solution(x, y, n) {
  let queue = [];
  queue.push([y / 2, 1], [y / 3, 1], [y - n, 1]);

  if (x == y) return 0;

  while (queue.length > 0) {
    let [shifted, cnt] = queue.shift();

    if (!Number.isInteger(shifted) || shifted < 1) continue;
    if (shifted === x) return cnt;

    if (Number.isInteger(shifted / 2)) {
      queue.push([shifted / 2, cnt + 1]);
    }
    if (Number.isInteger(shifted / 3)) {
      queue.push([shifted / 3, cnt + 1]);
    }
    if (Number.isInteger(shifted - n)) {
      queue.push([shifted - n, cnt + 1]);
    }
  }

  return -1;
}