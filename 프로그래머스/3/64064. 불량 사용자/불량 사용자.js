/*
제재 아이디 목록들을 구했을 때 아이디들이 나열된 순서와 관계없이 아이디 목록의 내용이 동일하다면 같은 것으로 처리하여 하나로 세면 됩니다.
-> 조합을 구한다.

abc -> 
*/

function getPermutation(arr, cnt) {
  const result = [];
  if (cnt === 1) {
    return arr.map((el) => [el]);
  }

  arr.forEach((current, idx) => {
    const rest = [...arr.slice(0, idx), ...arr.slice(idx + 1)];
    const permutations = getPermutation(rest, cnt - 1);
    const addition = permutations.map((c) => [current, ...c]);
    result.push(...addition);
  });

  return result;
}

function isIdMatch(userId,bannedId) {
    let maskCount = 0
    if(userId.length !== bannedId.length) return false
    
    for(let i=0;i<userId.length;i++) {
        if(bannedId[i] === '*') {
            maskCount += 1
            continue
        } 
        if(userId[i] !== bannedId[i]) return false
    }
    
    return true
}


function solution(user_id, banned_id) {
  const candidates = getPermutation(user_id, banned_id.length).filter(
    (candidate) => candidate.every((c, idx) => isIdMatch(c, banned_id[idx]))
  );

  const sorted = candidates.map((c) => c.sort()).map((c) => c.join(""));

  return new Set(sorted).size;
}
