function targetNumber(numbers, target) {
  let numbers_arr = [...numbers];
  let cnt = 0;
  let prev_sum = [0];

  for (let i = 0; i < numbers_arr.length; i++) {
    let new_sum = [];
    for (let j = 0; j < prev_sum.length; j++) {
      new_sum.push(prev_sum[j] + numbers_arr[i]);
      new_sum.push(prev_sum[j] - numbers_arr[i]);
    }

    prev_sum = [...new_sum];
  }

  cnt = prev_sum.filter((sum) => sum === target).length;

  return cnt;
}

function solution(numbers, target) {
    var answer = targetNumber(numbers,target);
    return answer;
}