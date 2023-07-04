function solution(skill, skill_trees) {
  let cnt = 0;
  let skillArr = [...skill];

  skill_trees.forEach((skillTree) => {
    let isAble = true;
    let pointer = 0;
    for (let i = 0; i < skillTree.length; i++) {
      if (skillArr.includes(skillTree[i])) {
        if (skillTree[i] === skill[pointer]) {
          pointer += 1;
        } else {
          isAble = false;
          break;
        }
      }
    }

    if (isAble) cnt += 1;
  });

  return cnt;
}