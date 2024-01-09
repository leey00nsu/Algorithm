function solution(N, road, K) {
  const arr = [];

  for (let i = 0; i < N; i++) {
    const subArr = [];
    for (let j = 0; j < N; j++) {
      subArr.push(Infinity);
    }
    arr.push(subArr);
  }

  for (let r of road) {
    const [from, to, weight] = r;

    let lower = Math.min(from, to) - 1;
    let higher = Math.max(from, to) - 1;

    if (!arr[lower][higher]) {
      arr[lower][higher] = weight;
    } else {
      arr[lower][higher] = Math.min(arr[lower][higher], weight);
    }
    if (!arr[higher][lower]) {
      arr[higher][lower] = weight;
    } else {
      arr[higher][lower] = Math.min(arr[higher][lower], weight);
    }
  }

  const visited = Array(N).fill(false);
  const dist = visited.map((_, i) => arr[0][i]);

  dist[0] = 0;
  visited[0] = true;

  const findSmallestNodeIndex = () => {
    let minDist = Infinity;
    let minIndex = 0;

    for (let i = 0; i < N; i++) {
      if (visited[i]) continue;
      if (dist[i] < minDist) {
        minDist = dist[i];
        minIndex = i;
      }
    }

    return minIndex;
  };

  for (let i = 0; i < N; i++) {
    const targetIndex = findSmallestNodeIndex();
    visited[targetIndex] = true;
    for (let j = 0; j < N; j++) {
      if (visited[j]) continue;
      if (dist[j] > dist[targetIndex] + arr[targetIndex][j]) {
        dist[j] = dist[targetIndex] + arr[targetIndex][j];
      }
    }
  }

  return dist.filter((el) => el <= K).length;
}