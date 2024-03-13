/*
배달을 간 후, 수거할 수 있으므로
맨 끝 집부터 배달하며 수거한다.
*/

function solution(cap, n, deliveries, pickups) {
  let distance = 0;

  let d = 0;
  let p = 0;

  for (let i = n - 1; i >= 0; i--) {
    let cnt = 0;

    d -= deliveries[i];
    p -= pickups[i];

    while (d < 0 || p < 0) {
      d += cap;
      p += cap;
      cnt += 1;
    }

    distance += (i + 1) * 2 * cnt;
  }

  return distance;
}