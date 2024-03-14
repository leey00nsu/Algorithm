/*
단어 begin에서 target으로 변환한다.
1. 한 번에 한 개의 알파벳만 바꾼다.
2. words에 있는 단어로만 변환한다.

가장 짧은 변환 과정을 찾는다.
*/

function solution(begin, target, words) {
  const wordList = [];
  const visited = [];
  const queue = [];
    
  if(!words.includes(target)) return 0

  for (let i = 0; i < begin.length; i++) {
    wordList.push([]);
  }

  words.forEach((w) => {
    for (let i = 0; i < w.length; i++) {
      if (!wordList[i].includes(w[i])) {
        wordList[i].push(w[i]);
      }
    }
  });

  queue.push([begin, 0]);

  while (queue.length > 0) {
    const [word, count] = queue.shift();
      
    visited.push(word);

    if (word === target) return count;

    const currentArr = word.split("");

    currentArr.forEach((c, idx) => {
      wordList[idx].forEach((w, wIdx) => {
        const newWord = [...word.slice(0, idx), w, ...word.slice(idx + 1)].join(
          ""
        );

        if (words.includes(newWord) && !visited.includes(newWord))
          queue.push([newWord, count + 1]);
      });
    });
  }
}