function getTuple(set) {
  let parsed_set = set.slice(1, -1);
  let stack = [];
  let ans = [];

  let tmp_stack = [];
  let tmp_num = [];

  for (let i = 0; i < parsed_set.length; i++) {
    if (parsed_set[i] === "{") {
      tmp_stack = [];
      tmp_num = [];
    } else if (parsed_set[i] === "}") {
      if (tmp_num.length > 0) {
        tmp_stack.push(Number(tmp_num.join("")));
        tmp_num = [];
      }
      if (tmp_stack.length > 0) {
        stack.push(tmp_stack);
        tmp_stack = [];
      }
    } else if (parsed_set[i] === ",") {
      if (tmp_num.length > 0) {
        tmp_stack.push(Number(tmp_num.join("")));
        tmp_num = [];
      }
    } else {
      tmp_num.push(parsed_set[i]);
    }
  }

  stack.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length === b.length) return 0;
    if (a.length < b.length) return -1;
  });
  console.log(stack);

  for (let i of stack) {
    let new_i = i.filter((item) => !ans.includes(item));

    ans.push(...new_i);
  }

  return ans;
}

function solution(s) {
    var answer = getTuple(s);
    return answer;
}