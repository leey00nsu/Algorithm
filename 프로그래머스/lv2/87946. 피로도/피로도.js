function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

function solution(k, dungeons) {
  let result = [];
  // 모든 던전의 경우의 수
  let dungeons_map = permutation(dungeons, dungeons.length);

  function goDungeon(dungeon) {
    let temp_k = k;
    let cnt = 0;

    for (let i = 0; i < dungeon.length; i++) {
      [minimum_k, use_k] = dungeon[i];

      if (temp_k >= minimum_k) {
        temp_k -= use_k;
        cnt += 1;
      } else {
        break;
      }
    }
    return cnt;
  }

  for (let dungeon of dungeons_map) {
    result.push(goDungeon(dungeon));
  }

  return Math.max(...result);
}