/*
시소는 중심으로부터 2m,3m,4m 거리에 좌석이 하나씩 있다.
시소를 두 명이 마주보고 탈 때 균형을 이루면 그 두 사람을 시소 짝꿍이라고 한다.
즉, 탑승한 사람의 무게와 좌석 간의 거리 곱이 양쪽이 같으면 시소 짝꿍이다.

ex. A,B가 존재할 때 A의 무게 A_weight와 B의 무게 B_weight가 존재한다.
A_weight * x = B_weight * y , (x,y 는 2,3,4 중 하나) 라면 A,B는 시소 짝꿍이다.
즉, A_weight*x/y = B_weight 인 조건을 찾는다.

같은 무게는 반드시 균형을 이룬다.

*/


function solution(weights) {
  const map = {};
  let cnt = 0;

  weights.forEach((w) => {
    cnt +=
      (map[w] || 0) +
      (map[(w * 2) / 3] || 0) +
      (map[(w * 2) / 4] || 0) +
      (map[(w * 3) / 4] || 0) +
      (map[(w * 3) / 2] || 0) +
      (map[(w * 4) / 2] || 0) +
      (map[(w * 4) / 3] || 0);

    map[w] = (map[w] || 0) + 1;
  });

  console.log(map);

  return cnt;
}