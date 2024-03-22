/*
일렬로 놓여있는 징검다리를 건넌다.
각 디딤돌에는 숫자가 적혀있다.
각 디딤돌을 밟을 때 숫자가 1씩 줄어든다.
디딤돌의 숫자가 0이되면 다음 디딤돌로 건너뛴다.
다음 디딤돌이 여러개인 경우, 가까운 디딤돌로만 건넌다.

한 번에 건널 수 있는 최대 칸수 k가 주어진다.
*/

function solution(stones, k) {
  let left = 1;
  let right = 200000000;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let skip = 0;

    for (let i = 0; i < stones.length; i++) {
      if (stones[i] - mid <= 0) skip += 1;
      else skip = 0;

      if (skip >= k) break;
    }

    if (skip >= k) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}