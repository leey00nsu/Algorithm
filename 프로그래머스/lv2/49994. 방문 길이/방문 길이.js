function solution(dirs) {
  let visited = {};
  let current = "0,0";
  let past = "0,0";
  let cnt = 0;

  let order = [...dirs];

  order.forEach((o) => {
    let [x, y] = current.split(",");
    if (o === "U") {
      y = Number(y) + 1;
    } else if (o === "D") {
      y = Number(y) - 1;
    } else if (o === "R") {
      x = Number(x) + 1;
    } else if (o === "L") {
      x = Number(x) - 1;
    }

    if (x > 5 || x < -5 || y > 5 || y < -5) {
      return;
    }

    past = current;
    current = `${x},${y}`;
    line = `${past},${current}`;
    invertedLine = `${current},${past}`;
    if (!visited[line] && !visited[invertedLine]) {
      visited[line] = true;
      cnt += 1;
    }
  });

  return Object.keys(visited).length;
}