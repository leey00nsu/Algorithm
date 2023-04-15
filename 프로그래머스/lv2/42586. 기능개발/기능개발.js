function deploys(progresses, speeds) {
  let reversed_arr = progresses.reverse();
  let reversed_speed = speeds.reverse();
  let result_arr = [];

  while (reversed_arr.length > 0) {
    let cnt = 0;
    for (let i = 0; i < reversed_arr.length; i++) {
      reversed_arr[i] += reversed_speed[i];
    }

    while (true) {
      if (reversed_arr.at(-1) >= 100) {
        reversed_arr.pop();
        reversed_speed.pop();
        cnt += 1;
      } else {
        break;
      }
    }

    if (cnt > 0) {
      result_arr.push(cnt);
    }
  }

  return result_arr;
}

function solution(progresses, speeds) {
    var answer = deploys(progresses,speeds);
    return answer;
}