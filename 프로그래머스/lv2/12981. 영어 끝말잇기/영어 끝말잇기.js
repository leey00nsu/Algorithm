function wordChain(n, words) {
  let stack = [];
  let player = 1;
  let round = 1;
  let lastWordsLength = null;

  stack.push(words[0]);
  lastWordsLength = words[0].length;

  for (let i = 1; i < words.length; i++) {
    player += 1;
    if (player > n) {
      player = 1;
      round += 1;
    }
    console.log(words[i][0], stack[stack.length - 1][lastWordsLength - 1]);
    if (
      words[i][0] === stack[stack.length - 1][lastWordsLength - 1] &&
      !stack.includes(words[i])
    ) {
      stack.push(words[i]);
      lastWordsLength = words[i].length;
      console.log(lastWordsLength);
    } else {
      return [player, round];
    }
  }

  return [0, 0];
}

function solution(n, words) {
    var answer = wordChain(n,words);

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다. 
    console.log('Hello Javascript')

    return answer;
}