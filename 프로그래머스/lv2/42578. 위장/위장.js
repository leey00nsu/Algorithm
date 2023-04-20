function camouflauge(clothes) {
  let cnt = 1;
  clothes_obj = {};
  for (item of clothes) {
    if (clothes_obj[item[1]]) {
      clothes_obj[item[1]] = [...clothes_obj[item[1]], item[0]];
    } else {
      clothes_obj[item[1]] = [item[0]];
    }
  }

  for (item in clothes_obj) {
    cnt *= clothes_obj[item].length + 1;
  }

  return cnt - 1;
}

function solution(clothes) {
    var answer = camouflauge(clothes);
    return answer;
}