function getBoats(people, limit) {
  let boats = 0;
  let i = 0;
  let j = people.length - 1;
  people.sort((a, b) => b - a);

  let curWeight = 0;
  while (i <= j) {
    curWeight = 0;
    boats += 1;

    let max = people[i];
    i += 1;
    curWeight += max;

    while (true) {
      let min = people[j];

      curWeight += min;

      if (curWeight > limit) {
        break;
      }
      j -= 1;
    }
  }

  return boats;
}

function solution(people, limit) {
    var answer = getBoats(people,limit);
    return answer;
}