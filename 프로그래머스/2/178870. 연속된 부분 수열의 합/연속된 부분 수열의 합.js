// 비내림차순으로 정렬된 수열이 주어진다.
// 이 수열에서 임이의 두 인덱스의 원소와 그 사이의 원소들을 포함하는 부분 수열을 찾는다.
// 이때 이 부분 수열의 합이 k이다.
// 합이 k인 부분 수열이 여러개일 경우 , 가장 짧은 부분 수열을 찾는다.
// 길이기 같은 수열이 여러개일 경우, 앞쪽에 나오는 부분 수열을 찾는다.

// [1,1,1],3 -> [0,2]
// 투 포인터 알고리즘

function solution(sequence, k) {
  let startIndex = 0;
  let endIndex = sequence.length - 1;
  let startPoint = 0;
  let endPoint = 0;
  let sum = sequence[0];

  while (endPoint !== sequence.length && startPoint !== sequence.length) {
    if (k === sum && endIndex - startIndex > endPoint - startPoint) {
      startIndex = startPoint;
      endIndex = endPoint;
    }

    if (endPoint === sequence.length - 1) {
      sum = sum - sequence[startPoint];
      startPoint += 1;
      continue;
    }

    if (k > sum && endPoint < sequence.length - 1) {
      endPoint += 1;
      sum = sum + sequence[endPoint];
    } else if (k <= sum) {
      sum = sum - sequence[startPoint];
      startPoint += 1;
    }
  }

  return [startIndex, endIndex];
}