//bfs

function gameMapClosest(maps) {
  let visited = [];
  let queue = [];
  let x_ranges = [1, -1, 0, 0];
  let y_ranges = [0, 0, 1, -1];
  let x_max = maps.length - 1;
  let y_max = maps[0].length - 1;

  for (let i = 0; i < maps.length; i++) {
    let inner = new Array(maps[i].length).fill(false);
    visited.push(inner);
  }

  queue.push([0, 0, 1]);

  while (queue.length > 0) {
    let [x, y, distance] = queue.shift();

    if (x === x_max && y === y_max) {
      return distance;
    }

    for (let i = 0; i < 4; i++) {
      let x2 = x + x_ranges[i];
      let y2 = y + y_ranges[i];

      if (
        x2 < 0 ||
        x2 > x_max ||
        y2 < 0 ||
        y2 > y_max ||
        visited[x2][y2] ||
        maps[x2][y2] === 0
      ) {
        continue;
      }

      visited[x2][y2] = true;

      queue.push([x2, y2, distance + 1]);
    }
  }
  return -1;
}

function solution(maps) {
    var answer = gameMapClosest(maps);
    return answer;
}